pari_header=est_connexe(a)=my(n=#a,b=(1.+a)^(n-1));for(x=1,n,if(b[1,x]==0,return(0)));1\
/* graphe_connexe */\
graphe_connexe(n)={\
  my(a=matrix(n,n),i,j);\
  while(!est_connexe(a),i=1+random(n);j=1+random(n);if(i!=j,a[i,j]=a[j,i]=1));\
  a\
};\
\
/* M est la matrice d'un graphe connexe */\
graphe_eulerien(M)={\
  my(x,y,z,a=M,n=#a);\
  my(impdeg=vector(n,i,sum(j=1,n,a[i,j])%2));\
  while (sum(i=1,n,impdeg[i]),[x,y]=select(x->x,impdeg,1);\
    if (a[x,y],\
      z=1+(x==1)+(y==2);\
      if(a[x,z] && a[y,z], a[x,y]=a[y,x]=0,\
        a[x,z]=a[z,x]=1-a[x,z];a[y,z]=a[z,y]=1-a[y,z]),\
      a[x,y]=a[y,x]=1);\
      impdeg[x]=impdeg[y]=0\
  );\
  a\
};\
\
est_eulerien(a)=est_connexe(a)&&!vector(#a,i,sum(j=1,#a,a[i,j])%2)\
\
/* a  est la matrice d'un graphe eulerien trouve un cycle eulerien sur a */\
\
cycle_eulerien(a)={\
  my(n=#a,deg=vector(n,i,sum(j=1,n,a[i,j])),m=sum(i=1,n,deg[i])/2);\
  my(cdeg=vector(n),cyc=vector(m+1),c,x,x0,nb);\
  cyc[1]=nb=1;\
  while(nb <= m,\
   [c]=select(x->x&&cdeg[x]<deg[x],cyc,1);\
   x0 = x = cyc[c];\
   until (x==x0,\
     nb++; cdeg[x]++; y = 1; while (!a[x,y] || deg[y]==cdeg[y], y++);\
     cdeg[y]++; forstep (i=nb,c+1,-1,cyc[i]=cyc[i-1]);\
     a[x,y]--;a[y,x]--;\
     cyc[c]=y; x = y);\
  );\
  cyc\
};\
