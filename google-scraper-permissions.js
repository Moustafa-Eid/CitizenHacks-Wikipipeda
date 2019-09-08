//We need the required functionality "google store scraper"
var gplay = require('google-play-scraper');

//Depending on the user's input, we wish to use the API's search functionality to determine the closest match.
//
let searchQuery = "uber eats";

let returnedSearch = null;

let requestedURL = null;

returnedSearch = gplay.search({
    term: searchQuery,
    num: 1
  });

//Testing - since this is an asyncronous call to the server, we obtain a promise. THIS IS EXPECTED.
console.log(returnedSearch);

//We must call .then to allow the promise to be returned back to us. This returns, correctly, the JSON object that we wish to extract information from.
//Ref: https://stackoverflow.com/questions/38884522/why-is-my-asynchronous-function-returning-promise-pending-instead-of-a-val

requestedURL = returnedSearch.then(function(result){
  printer(result);
});
//Extract the URL since that is what we'll be piping into the app for comparison of the dependencies. There's a quirk here, since the actual payload is inside an array. That explains the "0" before the indexing to "url".

//Processing function to parse through the URL, and use it in a new search.
printer = function (result){
  console.log(result[0]["url"]);
  //Link is obtained and printed out for easy viewing/debugging
  //Search for: document.getElementsByClassName("BCMWSd"); within the obtained document call. They are always the same, but after this call we have to make the call:

  //https://www.gstatic.com/_/boq-play/_/js/k=boq-play.PlayStoreUi.en.WDQm5qA_fnI.es5.O/ck=boq-play.PlayStoreUi.fIdt_7y5b70.L.W.O/am=X-OPEA/d=1/exm=A4UTCb,A7fCU,ApIzg,BCm2ob,BVgquf,BfdUQc,CBlRxf,CxPp1d,DeWHJf,EFQ78c,EGNJFf,FCpbqb,FzOTdd,GVgNYb,GkRiKb,H6eOGe,HBRW5b,HDvRde,HLo3Ef,HtFpZ,IZT63,IsfMIf,JNoxi,JV1xu,JVCIjf,JpEzfb,Jtqg8d,KyP8jd,L1AAkb,LCkxpb,LVJlx,MI6k7c,MdUzUe,MivOyb,NHqEnf,NVKKEe,O6y8ed,OJUrvb,OmgaI,PAQZbb,PQaYAf,PrPYRd,QIhFr,Qa6EOc,R6xS0b,RIHuTe,RMhBfe,RdoHje,Ru0Pgb,SF3gsd,SdcwHb,SpsfSb,SttZte,TLjaTd,Tc5Ble,U0aPgd,Uas9Hd,UfnShf,UgAtXe,UpgCub,V3dDOb,VFlrye,VQbeBe,VXdfxd,VZDrQe,VrOwqf,VwDzFe,WO9ee,WXw8B,WhJNk,XAzchc,XVMNvd,Xm05Cc,Y2UGcc,Y9atKf,ZfAoz,ZwDk9d,ZxDaqc,_b,_latency,_tp,aOubeb,aW3pY,aqLWcd,aurFic,bBmIN,bDt8Bf,blwjVc,c7dHKc,cCHjWd,chfSwc,dodICd,e5qFLc,end4Ge,fKUV3e,fOzGvb,fPcQoe,fgj8Rb,gCNtGd,hKSk3e,hc6Ubd,i2u2Pb,iJAeU,iSvg6e,iTsyac,iWP1Yb,jLUKge,jSYnsd,jnH8Sb,kRhlSb,kjKdXe,lEK3dc,lPKSwe,lazG7b,ltDFwf,lwddkf,lwqmbc,mI3LFb,mdR7q,mqk2rb,nxXerc,o02Jie,ozuUvf,p14Ksc,p8L0ob,pB6Zqd,pal88,pjICDe,plkVjb,pw70Gc,q8NYMd,qAKInc,rE6Mgd,rHjpXd,s39S4,tfTN8c,tiSncc,uKHcoc,uY3Nvd,v8syQb,vFJKcf,vGCTM,vK6idb,w9hDv,wGM7Jc,wI7Sfc,wQUnKf,wmo3ld,wmwg8b,ws9Tlc,x60fie,x7DRrf,xEEoMc,xQtZb,xiqEse,y8Aajc,yDVVkb,zIrsv,zbML3c,zmABtb/excm=_b,_tp,appdetailsview/ed=1/wt=2/ct=zgms/rs=AB1caFWXKq07CTDWm-57BrqL9jd5hotBdw/m=AMnZib

  //The above returns a specific web element (BCMWSd) which includes the permissions. If we can get this to work, then the whole project is set.
}

