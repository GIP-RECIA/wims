!set slib_header_deploiement=\
deplacement_poly3D (a,b,nab,f2D,i1,i2,tt)={\
  /* a et b sont deux points 3D, nab est un vecteur unitaire ortho à (a,b)\
     f2D[i1],f2D[i2] est un segment 2D de même longueur que (a,b).\
     Il existe un unique déplacement 3D qui envoie (f2D[i1],0) sur a,\
     (f2D[i2],0) sur b, et le vecteur k=(0,0,1) sur un vecteur w3 faisant un angle\
     tt avec nab. On calcule l'image par ce déplacement de f2Dx(0) et w3 */\
  my(v=normalise(f2D[i2]-f2D[i1]),c=cos(tt),s=sin(tt));\
  my(w1=normalise(b-a),aux=wedge(nab,w1),w2=c*aux+s*nab,w3=c*nab-s*aux);\
  my(m=[v[1],-v[2];v[2],v[1]]*matconcat([w1~,w2~])~);\
  my(dec=a-f2D[i1]*m);\
  [vector(#f2D, i, f2D[i]*m + dec),w3];\
};\
\
etale3D(v,f,f2D,ns,no,t)={\
  /* v est un arbre couvrant du graphe des faces donne par sa fonction de direction vers la dernière face,\
  // f contient les numeros des sommets des faces en 3D\
  // f2D contient les coordonnees 2D de projections des faces\
  // ns est le nombre de sommets du polyedre\
  // no est la liste des normales aux faces\
  // le resultat est la liste des coordonnées 3D des sommets du déploiement\
  // t est un paramètre entre 0 et 1. Pour t = 1 on doit trouver le polyèdre,\
  // posé sur sa dernière face dans le plan xOy. Pour t = 0, on doit trouver\
  // le patron, dans le même plan\
  */\
  my(r=f2D[#f],nbs,l,s3D=vector(2*ns-2),cor=vector(#f),nno=vector(#f));\
  cor[#f]=vector(#r+1,x,if(x==1,#r,x-2)); nno[#f]=[0,0,1];\
  for(k=1,#r,s3D[k]=[r[k][1],r[k][2],0]);\
  nbs = #r;\
  for(kk=1,#f-1,\
    while(#cor[kk]==0,\
      l=kk; while(#cor[v[l]]==0,l=v[l]);\
      [i1,j1,i2,j2]=adj(f[l],f[v[l]]);\
      qr=deplacement_poly3D(s3D[cor[v[l]][j1]+1],s3D[cor[v[l]][j2]+1],nno[v[l]],\
      f2D[l],i1-1,i2-1,t*acos(no[l]*no[v[l]]~));\
      r=qr[1];nno[l]=qr[2];\
      rr=vector(#r+1);\
      rr[1]=#r;\
      rr[i1]=cor[v[l]][j1];\
      rr[i2]=cor[v[l]][j2];\
      for(k=2,#r+1,if(k!=i1 && k!=i2,\
        rr[k]=nbs; nbs+=1; s3D[nbs]=r[k-1]));\
      cor[l]=rr));\
  return(s3D);\
};
