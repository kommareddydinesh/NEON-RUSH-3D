import * as THREE from 'three';
export class Player {
  constructor(scene) {
    this.scene=scene; this.lane=1; this.x=0; this.y=0; this.jumpVelocity=0; this.jumping=false; this.sliding=false; this.slideTimer=0;
    this.group=new THREE.Group(); this.group.position.set(0,0,3.2); scene.add(this.group);
    const suit=new THREE.MeshStandardMaterial({color:0x111c36,metalness:.72,roughness:.25,emissive:0x061c35});
    const cyan=new THREE.MeshStandardMaterial({color:0x3af5ff,emissive:0x08cde8,emissiveIntensity:2.3,metalness:.4,roughness:.2});
    const magenta=new THREE.MeshStandardMaterial({color:0xff38d7,emissive:0xd800a8,emissiveIntensity:1.6});
    const skin=new THREE.MeshStandardMaterial({color:0xd9e7f8,metalness:.2,roughness:.4});
    this.body=new THREE.Group(); this.group.add(this.body);
    this.part(new THREE.CapsuleGeometry(.28,.58,5,8),suit,[0,.95,0]); this.part(new THREE.SphereGeometry(.22,14,12),skin,[0,1.55,0]); this.part(new THREE.BoxGeometry(.32,.08,.06),cyan,[0,1.57,-.19]); this.part(new THREE.BoxGeometry(.43,.09,.25),magenta,[0,1.19,0]);
    this.legs=[];
    for(const side of [-1,1]) {const leg=new THREE.Mesh(new THREE.CapsuleGeometry(.095,.38,3,6),suit);leg.position.set(side*.13,.37,0);this.body.add(leg);this.legs.push(leg);const boot=new THREE.Mesh(new THREE.BoxGeometry(.18,.1,.32),cyan);boot.position.set(side*.13,.12,-.06);this.body.add(boot);const arm=new THREE.Mesh(new THREE.CapsuleGeometry(.065,.34,3,6),magenta);arm.position.set(side*.36,.98,0);arm.rotation.z=side*-.28;this.body.add(arm);}
    this.shadow=new THREE.Mesh(new THREE.CircleGeometry(.5,24),new THREE.MeshBasicMaterial({color:0x03eaff,transparent:true,opacity:.28}));this.shadow.rotation.x=-Math.PI/2;this.shadow.position.y=.025;this.group.add(this.shadow);
  }
  part(g,m,p){const mesh=new THREE.Mesh(g,m);mesh.position.set(...p);mesh.castShadow=true;this.body.add(mesh);return mesh;}
  moveLane(d){this.lane=Math.max(0,Math.min(2,this.lane+d));}
  jump(){if(this.jumping||this.sliding)return;this.jumping=true;this.jumpVelocity=8.3;}
  slide(){if(this.jumping||this.sliding)return;this.sliding=true;this.slideTimer=.72;this.body.scale.y=.48;this.body.position.y=-.38;}
  update(dt,elapsed){this.x=THREE.MathUtils.damp(this.x,(this.lane-1)*2.25,12,dt);this.group.position.x=this.x;if(this.jumping){this.y+=this.jumpVelocity*dt;this.jumpVelocity-=21*dt;if(this.y<=0){this.y=0;this.jumping=false;this.jumpVelocity=0;}this.group.position.y=this.y;}if(this.sliding){this.slideTimer-=dt;if(this.slideTimer<=0){this.sliding=false;this.body.scale.y=1;this.body.position.y=0;}}this.legs.forEach((l,i)=>l.rotation.x=Math.sin(elapsed*13+i*Math.PI)*(this.sliding?.1:.6));this.shadow.scale.setScalar(1-Math.min(this.y*.1,.45));this.shadow.material.opacity=.28-Math.min(this.y*.035,.2);}
  dispose(){this.group.traverse(o=>{if(o.isMesh){o.geometry.dispose();if(Array.isArray(o.material))o.material.forEach(m=>m.dispose());else o.material.dispose();}});this.scene.remove(this.group);}
}