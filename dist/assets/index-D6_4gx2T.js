import{p as e}from"./phaser-CrGWs1g-.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class t extends e.Scene{constructor(){super("GameOver")}create(){this.add.text(300,100,"Game Over!",{fontSize:"32px",color:"#ff0000"}),this.add.text(350,300,"Play Again",{fontSize:"20px",color:"#fff"}).setInteractive().on("pointerdown",(()=>{this.scene.start("MainMenu")}))}}class s extends Phaser.Scene{constructor(){super("MainMenu")}preload(){this.load.image("background","assets/bg.png"),this.load.image("title","assets/title.png"),this.load.image("level1","assets/fettuccine.png"),this.load.image("level2","assets/farfalle.png"),this.load.image("level3","assets/rigatoni.png"),this.load.image("level4","assets/ravioli.png"),this.load.image("lock","assets/lock.png"),this.load.image("title-bg","assets/title-bg.png")}create(){const e=this.sound.add("hover"),t=this.sound.add("start"),s=this.sound.add("select"),i=this.add.image(0,0,"background");i.setOrigin(0,0),i.setDisplaySize(this.sys.game.config.width,this.sys.game.config.height);const a=this.add.image(this.cameras.main.width/2,this.cameras.main.width/4,"title-bg");a.setOrigin(.5,.5).setScale(800/a.width),this.add.text(this.cameras.main.width/2,this.cameras.main.width/4-50,"pasta-nation",{fontFamily:"PixelFont",fontSize:"72px",color:"#000000"}).setOrigin(.5,.5).setShadow(2,2,"#ffffff",4,!1,!0),this.add.text(this.cameras.main.width/2,this.cameras.main.width/4+20,"your handcrafted pasta\njourney begins here!",{fontFamily:"PixelFont",textAlign:"center",fontSize:"32px",color:"#ffffff"}).setOrigin(.5,.5).setShadow(1,1,"#000000",2,!1,!0);const n=550/this.cameras.main.width,r=[],h=["fettuccine","farfalle","rigatoni","ravioli"];for(let l=0;l<4;l++){const e=this.add.image((l+1)*this.cameras.main.width/5,2*this.cameras.main.height/3,`level${l+1}`).setInteractive();e.setScale(n),e.preFX.addShadow(),r.push(e);const t=this.add.image((l+1)*this.cameras.main.width/5,2*this.cameras.main.height/3+200,"plank");t.setScale(.15),t.preFX.addShadow();const s=this.add.text((l+1)*this.cameras.main.width/5,2*this.cameras.main.height/3+200,h[l],{fontFamily:"PixelFont",fontSize:"26px",color:"#ffffff"});s.setOrigin(.5,.5),s.setShadow(1,1,"#000000",3,!1,!0)}for(let l=0;l<4;l++){const t=this.add.group(),s=r[l];if(t.add(s),0!==l){const e=this.add.image((l+1)*this.cameras.main.width/5,2*this.cameras.main.height/3,"lock");e.setScale(.15),r[l].setTint(8421504),t.add(e)}s.on("pointerover",(()=>{s.setScale(n+.02),e.play()})),s.on("pointerout",(()=>{s.setScale(n)}))}r[0].on("pointerdown",(()=>{t.play(),this.scene.start("Level1")}));const o=this.add.image(100,100,"muteIcon");o.setInteractive(),o.setScale(.1),o.setVisible(!1),o.on("pointerdown",(()=>{this.sound.mute=!1,s.play(),o.setVisible(!1),d.setVisible(!0)}));const d=this.add.image(100,100,"soundIcon");d.setInteractive(),d.setScale(.1),d.on("pointerdown",(()=>{s.play(),this.sound.mute=!0,o.setVisible(!0),d.setVisible(!1)}))}}class i extends Phaser.Scene{constructor(){super("Level1")}preload(){this.load.image("level-1-bg","assets/level-1-bg.png"),this.load.image("choppingBoard","assets/chopping-board.png"),this.load.image("clipboard","assets/clipboard.png"),this.load.image("flour","assets/flour.png"),this.load.image("flourEggOne","assets/flour-egg-1.png"),this.load.image("flourEggTwo","assets/flour-egg-2.png"),this.load.image("flourJar","assets/sprites/flour-jar.png"),this.load.image("saltJar","assets/sprites/salt-jar.png"),this.load.image("semolinaJar","assets/sprites/semolina-flour-jar.png"),this.load.image("oliveOil","assets/sprites/olive-oil.png"),this.load.image("knife","assets/sprites/knife.png"),this.load.image("eggCarton","assets/egg-carton.png"),this.load.image("egg","assets/egg.png"),this.load.image("eggOutline","assets/egg-outline.png"),this.load.image("whisk","assets/sprites/whisk.png"),this.load.image("whiskedEggs","assets/whisked-eggs.png"),this.load.image("napkin","assets/napkin.png"),this.load.image("tissues","assets/tissues.png"),this.load.image("tomatoes","assets/sprites/tomatoes.png"),this.load.image("basil","assets/sprites/basil.png"),this.load.image("sparkle","assets/sparkle.png"),this.load.image("flourParticle","assets/flour-particle.png"),this.load.image("spiral","assets/spiral.png"),this.load.image("rollingPin","assets/rolling-pin.png"),this.load.image("slice1","assets/sliced-dough/1.png"),this.load.image("slice2","assets/sliced-dough/2.png"),this.load.image("slice3","assets/sliced-dough/3.png"),this.load.image("slice4","assets/sliced-dough/4.png"),this.load.spritesheet("kneading","assets/kneading-sprites/sprite.png",{frameWidth:1e3,frameHeight:1e3})}create(){this.hoverSound=this.sound.add("hover"),this.wrongOption=this.sound.add("wrongOption"),this.selectSound=this.sound.add("select"),this.setBg(),this.setChoppingBoard(),this.setInstructions(),this.setItems(),this.showToast("Welcome to the game!",2e3),this.handleFirstStep()}markStepCompleted(){const e=this.add.graphics();e.fillStyle(65280,1),e.fillRect(this.cameras.main.width-490,this.cameras.main.height/2+50*this.currentStep-165,30,30),this.currentStep++}setItems(){const e=(e,t,s,i,a={x:.5,y:.5})=>{const n=this.add.image(e,t,s).setScale(i).setOrigin(a.x,a.y).setInteractive().setDepth(2);return n.preFX.addShadow(),n};this.items={saltJar:{x:1050,y:110,key:"saltJar",scale:.09},napkin:{x:200,y:1050,key:"napkin",scale:.3},semolinaJar:{x:520,y:400,key:"semolinaJar",scale:.12},eggCarton:{x:-0,y:10,key:"eggCarton",scale:.2,origin:{x:0,y:0}},flourJar:{x:0,y:440,key:"flourJar",scale:.2,origin:{x:0,y:0}},oliveOil:{x:510,y:130,key:"oliveOil",scale:.1},tomatoes:{x:200,y:1050,key:"tomatoes",scale:.15},basil:{x:530,y:1080,key:"basil",scale:.18},whisk:{x:550,y:690,key:"whisk",scale:.4},knife:{x:1150,y:250,key:"knife",scale:.4},tissues:{x:750,y:160,key:"tissues",scale:.15},rollingPin:{x:950,y:1050,key:"rollingPin",scale:.2,origin:{x:.5,y:.5}}},Object.entries(this.items).forEach((([t,s])=>{const i=e(s.x,s.y,s.key,s.scale,s.origin||void 0);let a;i.on("pointerover",(()=>{this.hoverSound.play(),a=i.preFX.addGlow("0xffc75e",1,0,!1)})),i.on("pointerout",(()=>{null==a||a.setActive(!1)})),this.items[t]=i})),this.setEggs()}setEggs(){this.items.eggs=[];for(let e=0;e<3;e++)for(let t=0;t<3;t++){const s=this.add.image(100+110*e,100+100*t,"egg").setScale(.09).setDepth(3).setInteractive();s.preFX.addShadow(),this.items.eggs.push(s)}}handleFirstStep(){const{x:e,y:t}=this.items.flourJar;this.showToast("Select the flour and drag it to the main area",1e4),this.input.setDraggable(this.items.flourJar),this.items.flourJar.on("drag",((e,t,s)=>{this.items.flourJar.x=t,this.items.flourJar.y=s})),this.items.flourJar.on("dragend",(()=>{const s=this.items.flourJar.getBounds(),i=this.choppingBoard.getBounds();Phaser.Geom.Intersects.RectangleToRectangle(s,i)&&0===this.currentStep?(this.selectSound.play(),this.currentStepObj=this.add.image(this.cameras.main.width/2+20,this.cameras.main.height/2+20,"flour").setOrigin(.5,.5).setInteractive(),this.currentStepObj.preFX.addShadow(0,0,.1,1,"0x000000",6,.5),this.tweens.add({targets:this.currentStepObj,alpha:{from:0,to:1},scale:{from:0,to:1},duration:1e3,ease:"Power0",yoyo:!1,repeat:0,onComplete:()=>{this.markStepCompleted(),this.handleSecondStep()}}),this.addSparkle(this.cameras.main.width/2+20,this.cameras.main.height/2+20)):this.wrongOption.play(),this.tweens.add({targets:this.items.flourJar,x:e,y:t,duration:500,ease:"Power0",yoyo:!1,repeat:0})}))}setChoppingBoard(){this.choppingBoard=this.add.image(this.cameras.main.width/2,this.cameras.main.height/2,"choppingBoard").setOrigin(.5,.5),this.choppingBoard.setScale(800/this.choppingBoard.width),this.choppingBoard.preFX.addShadow()}setInstructions(){this.clipboard=this.add.image(this.cameras.main.width-750,this.cameras.main.height/2,"clipboard").setOrigin(0,.5),this.clipboard.setScale(800/this.clipboard.width),this.clipboard.preFX.addShadow();const e=["Add 200g flour","Crack 2 eggs","Whisk the eggs","Knead the dough and\neggs","Rest the dough for\n30 min","Cut the dough","Roll into thin sheets","Fold in half","Cut noodles"];this.currentStep=0;for(let t=0;t<e.length;t++){this.add.text(this.cameras.main.width-450,this.cameras.main.height/2+50*t-150,e[t],{fontSize:"26px",fontFamily:"PixelFont",fill:"#000000"}).setOrigin(0,.5);const s=this.add.graphics();s.fillStyle(16777215,1),s.fillRect(this.cameras.main.width-490,this.cameras.main.height/2+50*t-165,30,30)}}setBg(){const e=this.add.image(0,0,"level-1-bg");e.setOrigin(0,0),e.setDisplaySize(this.sys.game.config.width,this.sys.game.config.height),e.preFX.addVignette(.5,.5,.9,.5)}handleSecondStep(){this.showToast("Select the egg and drag it to the main area",1e4);let e=this.add.image(this.cameras.main.width/2-20,this.cameras.main.height/2+30,"eggOutline").setScale(.05).setInteractive();this.tweens.add({targets:[e],alpha:.2,duration:500,ease:"Power0",yoyo:!0,repeat:-1});let t=0;this.items.eggs.forEach((s=>{this.input.setDraggable(s);let[i,a]=[s.x,s.y];s.on("drag",((e,t,i)=>{s.x=t,s.y=i})),s.on("dragend",(()=>{const n=s.getBounds(),r=this.currentStepObj.getBounds();Phaser.Geom.Intersects.RectangleToRectangle(n,r)&&1===this.currentStep?(s.destroy(),e.destroy(),this.selectSound.play(),this.currentStepObj.destroy(),0===t?(this.currentStepObj=this.add.image(this.cameras.main.width/2+20,this.cameras.main.height/2+20,"flourEggOne").setOrigin(.5,.5).setInteractive(),this.currentStepObj.setScale(500/this.currentStepObj.width),this.currentStepObj.preFX.addShadow(0,0,.1,1,"0x000000",6,.5),this.addSparkle(this.cameras.main.width/2+20,this.cameras.main.height/2+20),t++,e=this.add.image(this.cameras.main.width/2+50,this.cameras.main.height/2+20,"eggOutline").setScale(.05).setInteractive(),this.tweens.add({targets:[e],alpha:.2,duration:500,ease:"Power0",yoyo:!0,repeat:-1})):(e.destroy(),this.currentStepObj.destroy(),this.currentStepObj=this.add.image(this.cameras.main.width/2+20,this.cameras.main.height/2+20,"flourEggTwo").setOrigin(.5,.5).setInteractive(),this.currentStepObj.setScale(500/this.currentStepObj.width),this.currentStepObj.preFX.addShadow(0,0,.1,1,"0x000000",6,.5),this.addSparkle(this.cameras.main.width/2+20,this.cameras.main.height/2+20),this.markStepCompleted(),this.handleThirdStep())):(this.wrongOption.play(),this.tweens.add({targets:s,x:i,y:a,duration:500,ease:"Power2"}))}))}))}handleThirdStep(){this.showToast("Select the whisk and move it to whisk the eggs",1e4);const e=this.add.image(this.cameras.main.width/2,this.cameras.main.height/2,"spiral").setOrigin(.5,.5).setScale(.1).setAlpha(.1);this.tweens.add({targets:e,angle:360,duration:3e3,ease:"Linear",repeat:-1});const t=this.items.whisk,{x:s,y:i}=t;this.input.setDraggable(t);let a=null,n=0,r=!1;t.on("dragstart",(e=>{r||this.addSparkle(this.cameras.main.width/2+20,this.cameras.main.height/2+20)})),t.on("drag",((s,i,h)=>{2===this.currentStep&&(t.x=i,t.y=h,null!==a?Math.abs(i-a)>100&&(n++,a=i,n%4!=0||r||this.addSparkle(this.cameras.main.width/2+20,this.cameras.main.height/2+20)):a=i,20!==n||r||(r=!0,this.currentStepObj.destroy(),this.currentStepObj=this.add.image(this.cameras.main.width/2+20,this.cameras.main.height/2+20,"whiskedEggs").setOrigin(.5,.5).setInteractive(),this.currentStepObj.setScale(500/this.currentStepObj.width),this.currentStepObj.preFX.addShadow(0,0,.1,1,"0x000000",6,.5),e.destroy(),this.showToast("Whisking Completed!",3e3),this.markStepCompleted(),this.handleFourthStep()))})),t.on("dragend",(()=>{a=null,this.tweens.add({targets:t,x:s,y:i,duration:500,ease:"Power2"})}))}handleFourthStep(){this.showToast("Click on the flour to knead the dough",5e3);let e=!1;this.anims.create({key:"knead",frames:this.anims.generateFrameNumbers("kneading",{start:0,end:15}),frameRate:5,repeat:0}),this.currentStepObj.on("pointerdown",(()=>{e||(e=!0,this.currentStepObj.destroy(),this.currentStepObj=this.add.sprite(this.cameras.main.width/2+20,this.cameras.main.height/2+20,"kneading").setOrigin(.5,.5),this.currentStepObj.setScale(400/this.currentStepObj.width),this.currentStepObj.preFX.addShadow(),this.currentStepObj.on("animationcomplete",((e,t)=>{this.showToast("Kneading Completed!",3e3),this.markStepCompleted(),this.handleFifthStep()})),this.currentStepObj.on("pointerup",(()=>{this.time.delayedCall(500,(()=>{e&&this.currentStepObj.stop("knead")}))}))),this.currentStepObj.play("knead"),this.add.particles(this.cameras.main.width/2+20,this.cameras.main.height/2+20,"flourParticle",{speed:200,scaleX:.005,scaleY:.005,lifespan:500,duration:500})}))}handleFifthStep(){this.handleSixthStep()}handleSixthStep(){let e=[];const{x:t,y:s}=this.items.knife,i=this.add.graphics();i.lineStyle(10,16777215,.5),i.beginPath(),i.moveTo(this.cameras.main.width/2-200,this.cameras.main.height/2),i.lineTo(this.cameras.main.width/2+200,this.cameras.main.height/2),i.moveTo(this.cameras.main.width/2,this.cameras.main.height/2-200),i.lineTo(this.cameras.main.width/2,this.cameras.main.height/2+200),i.strokePath();let a=this.add.graphics({lineStyle:{width:4,color:16711680}}),n=!1,r=null;this.input.on("pointerdown",(e=>{n=!0,r={x:e.x,y:e.y}})),this.input.on("pointermove",(e=>{if(!n)return;a.clear(),a.lineBetween(r.x,r.y,e.x,e.y),a.strokePath();const t=new Phaser.Geom.Line(r.x,r.y,e.x,e.y);Phaser.Geom.Intersects.LineToRectangle(t,this.currentStepObj.getBounds())&&(this.currentStepObj.setTint(16764108),this.items.knife.setOrigin(0,.5),this.items.knife.x=e.x+10,this.items.knife.y=e.y+10)})),this.input.on("pointerup",(()=>{if(n=!1,r=null,e.push(a),2!==e.length)a=this.add.graphics({lineStyle:{width:4,color:16711680}}),this.currentStepObj.clearTint(),this.items.knife.setOrigin(.5,.5),this.tweens.add({targets:this.items.knife,x:t,y:s,duration:500,ease:"Power2"});else{this.showToast("Cutting Completed!",3e3),this.markStepCompleted(),this.handleSeventhStep(),e[0].destroy(),e[1].destroy(),i.destroy(),this.currentStepObj.destroy();for(let e=0;e<4;e++){this.currentStepObj=this.add.group();const i=this.add.image(this.cameras.main.width/2+20,this.cameras.main.height/2+20,"slice"+(e+1));i.setOrigin(.5,.5),i.setScale(400/i.width),this.currentStepObj.add(i),this.tweens.add({targets:i,x:this.cameras.main.width/2+(0===e||3===e?-20:40),y:this.cameras.main.height/2+(0===e||1===e?-20:40),duration:500,ease:"Power2"}),this.items.knife.setOrigin(.5,.5),this.tweens.add({targets:this.items.knife,x:t,y:s,duration:500,ease:"Power2"}),this.markStepCompleted(),this.addSparkle()}}}))}handleSeventhStep(){}addSparkle(e,t,s=1e3){this.sound.add("sparkle").play(),this.add.particles(e,t,"sparkle",{angle:{min:-360,max:360},speed:150,scaleX:.01,scaleY:.01,lifespan:1e3,duration:s})}showToast(e,t=2e3){const s=this.add.rectangle(this.cameras.main.centerX,this.cameras.main.height-100,this.cameras.main.width-500,150,14732938,1).setDepth(100).setOrigin(.5),i=this.add.text(this.cameras.main.centerX,this.cameras.main.height-100,e,{fontSize:"28px",color:"#000000",fontFamily:"PixelFont"}).setDepth(100).setOrigin(.5),a=this.add.group([s,i]);a.setY(this.cameras.main.height),this.tweens.add({targets:a.getChildren(),y:"-=100",alpha:{from:0,to:1},duration:300,ease:"Power2",onComplete:()=>{this.time.delayedCall(t,(()=>{this.tweens.add({targets:a.getChildren(),y:"+=100",alpha:0,duration:300,ease:"Power2",onComplete:()=>{a.destroy(!0)}})}))}})}}class a extends Phaser.Scene{constructor(){super("Preloader")}preload(){this.load.audio("hover","assets/sound-effects/hover.wav"),this.load.audio("start","assets/sound-effects/start.wav"),this.load.audio("select","assets/sound-effects/select.wav"),this.load.audio("bgm","assets/sound-effects/bgm.mp3"),this.load.audio("wrongOption","assets/sound-effects/wrong-option.wav"),this.load.audio("sparkle","assets/sound-effects/sparkle.wav"),this.load.image("soundIcon","assets/headphones.png"),this.load.image("muteIcon","assets/mute.png"),this.load.image("plank","assets/plank.png")}create(){this.sound.add("bgm").play({loop:!0,volume:.8}),this.scene.start("MainMenu")}}const n={type:Phaser.AUTO,width:1920,height:1280,parent:"game-container",scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[a,s,i,t]};new Phaser.Game(n);
