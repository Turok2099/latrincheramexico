const fs=require('fs'),ts=require('typescript'),vm=require('vm'),assert=require('node:assert/strict');
const exportsCache={};let calls=[],mode='ok';
const env={RESEND_API_KEY:'mock'};
function load(file){if(exportsCache[file])return exportsCache[file];const ctx={exports:{},require:n=>n==='@/lib/contacto'?load('src/lib/contacto.ts'):n==='next/server'?{NextResponse:{json:(body,init)=>({body,status:init?.status??200})}}:require(n),process:{env},Date,Intl,Buffer,URL,AbortSignal,console:{error:()=>{}},fetch:async(url,options)=>{calls.push({url,...options});if(mode==='throw')throw Error('offline');return {ok:mode==='ok',status:mode==='ok'?200:403,json:async()=>mode==='ok'?{id:'mock-id'}:{}}}};vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,ctx);return exportsCache[file]=ctx.exports;}
const shared=load('src/lib/contacto.ts'),api=load('src/app/api/contacto/route.ts');
const valid={...shared.contactoVacio,nombre:'Persona prueba',email:'test@example.com',telefono:'+52 55 1234 5678',tipoEvento:'catering',mensaje:'Consulta de prueba para mi evento',privacidad:true,solicitudId:'12345678-1234-4234-8234-123456789abc',origen:'/'};
let ip=0;const req=(data,origin='https://latrincheramexico.com',fixed)=>new Request('https://latrincheramexico.com/api/contacto',{method:'POST',headers:{origin,'content-type':'application/json','x-forwarded-for':fixed??String(++ip)},body:JSON.stringify(data)});
(async()=>{
 assert.equal(Object.keys(shared.validarContacto(valid)).length,0);
 for(const [key,value] of [['fechaEvento','2027-02-30'],['fechaEvento','2020-01-01'],['numeroInvitados','2.5'],['numeroInvitados','12abc'],['mensaje','x'.repeat(3001)],['tipoEvento','inventado'],['privacidad',false],['telefono','5555abcdefg']]){const r=await api.POST(req({...valid,[key]:value}));assert.equal(r.status,400,key);assert.ok(r.body.campos[key],key);}
 assert.equal(calls.length,0);
 assert.equal((await api.POST(req(valid,'https://otro.example'))).status,403);
 assert.equal((await api.POST(req({...valid,mensaje:'x'.repeat(18000)}))).status,413);
 assert.equal((await api.POST(req({...valid,sitioWeb:'bot'}))).status,200);assert.equal(calls.length,0);
 assert.equal((await api.POST(req(valid))).status,200);
 assert.equal((await api.POST(req(valid))).status,200);
 assert.equal(calls[0].headers['Idempotency-Key'],calls[1].headers['Idempotency-Key']);
 const p=JSON.parse(calls[0].body);assert.equal(p.to[0],'contacto@latrincheramexico.com');assert.equal(p.reply_to,valid.email);assert.match(p.text,/Por definir/);assert.match(p.text,/Catering para eventos/);
 await api.POST(req({...valid,mensaje:valid.mensaje+' modificado'}));assert.notEqual(calls[0].headers['Idempotency-Key'],calls[2].headers['Idempotency-Key']);
 mode='reject';assert.equal((await api.POST(req(valid))).status,502);
 mode='throw';assert.equal((await api.POST(req(valid))).status,502);
 delete env.RESEND_API_KEY;assert.equal((await api.POST(req(valid))).status,503);
 for(let i=0;i<5;i++)await api.POST(req(valid,undefined,'fixed'));assert.equal((await api.POST(req(valid,undefined,'fixed'))).status,429);
 console.log('Validación compartida, fechas imposibles, límites, consentimiento, origen, spam, reintentos, destino y errores: correctos. Sin correos reales.');
})().catch(e=>{console.error(e);process.exitCode=1});
