import{ph as v}from"./index-607cb647.js";class U{constructor(i,e){this.id=i,this.mbs=e,this.renderMbs=v(0,0,0,-1),this.elevationRange=null}}class x{constructor(){this.min=1/0,this.max=-1/0,this.valid=!1}}var c,s,a,h,d;(function(t){t[t.Unmodified=0]="Unmodified",t[t.Culled=1]="Culled",t[t.NotChecked=2]="NotChecked"})(c||(c={})),function(t){t[t.Unmodified=0]="Unmodified",t[t.PotentiallyModified=1]="PotentiallyModified",t[t.Culled=2]="Culled",t[t.Unknown=3]="Unknown",t[t.NotChecked=4]="NotChecked"}(s||(s={}));class M extends U{constructor(i,e,n,o,r,l,u,m,f,C){super(i,n),this.index=e,this.childCount=o,this.level=r,this.resources=l,this.version=u,this.lodMetric=m,this.maxError=f,this.numFeatures=C,this.failed=!1,this.cacheState=a.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=s.NotChecked}}(function(t){t[t.Unknown=0]="Unknown",t[t.Uncached=1]="Uncached",t[t.Cached=2]="Cached"})(a||(a={})),function(t){t[t.None=0]="None",t[t.MaxScreenThreshold=1]="MaxScreenThreshold",t[t.ScreenSpaceRelative=2]="ScreenSpaceRelative",t[t.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",t[t.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(h||(h={})),function(t){t[t.Hole=0]="Hole",t[t.Leaf=1]="Leaf"}(d||(d={}));class p{constructor(i,e,n,o){this.nodeHasLOD=i,this.isChosen=e,this.lodLevel=n,this.version=o}}export{h as a,d as c,p as d,M as h,x as i,c as n,s as o,a as s,U as t};
