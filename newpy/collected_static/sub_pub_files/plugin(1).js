!function(){CKEDITOR.plugins.add("video",{lang:["en","es"],getPlaceholderCss:function(){return"img.cke_video{background-image: url("+CKEDITOR.getUrl(this.path+"images/placeholder.png")+");background-position: center center;background-repeat: no-repeat;background-color:gray;border: 1px solid #a9a9a9;width: 80px;height: 80px;}"},onLoad:function(){CKEDITOR.addCss&&CKEDITOR.addCss(this.getPlaceholderCss())},init:function(e){var t=e.lang.video;return"undefined"==typeof e.element.data?void alert('The "video" plugin requires CKEditor 3.5 or newer'):(CKEDITOR.dialog.add("video",this.path+"dialogs/video.js"),e.addCommand("Video",new CKEDITOR.dialogCommand("video",{allowedContent:"video[controls,id,height,poster,width,autoplay];source[src,type]",requiredContent:"video"})),e.ui.addButton("Video",{label:t.toolbar,command:"Video",icon:this.path+"images/icon.png"}),e.addCss&&e.addCss(this.getPlaceholderCss()),e.addMenuItems&&e.addMenuItems({video:{label:t.properties,command:"Video",group:"flash"}}),e.on("doubleclick",function(e){var t=e.data.element;t.is("img")&&"video"==t.data("cke-real-element-type")&&(e.data.dialog="video")}),e.contextMenu&&e.contextMenu.addListener(function(e,t){if(e&&e.is("img")&&!e.isReadOnly()&&"video"==e.data("cke-real-element-type"))return{video:CKEDITOR.TRISTATE_OFF}}),CKEDITOR.dtd.$empty["cke:source"]=1,CKEDITOR.dtd.$empty.source=1,void(e.lang.fakeobjects.video=t.fakeObject))},afterInit:function(e){var t=e.dataProcessor,o=(t&&t.htmlFilter,t&&t.dataFilter);o.addRules({elements:{$:function(t){if("video"==t.name){t.name="cke:video";for(var o=0;o<t.children.length;o++)"source"==t.children[o].name&&(t.children[o].name="cke:source");var i=e.createFakeParserElement(t,"cke_video","video",!1),d=i.attributes.style||"",a=t.attributes.width,r=t.attributes.height,n=t.attributes.poster;return"undefined"!=typeof a&&(d=i.attributes.style=d+"width:"+CKEDITOR.tools.cssLength(a)+";"),"undefined"!=typeof r&&(d=i.attributes.style=d+"height:"+CKEDITOR.tools.cssLength(r)+";"),n&&(d=i.attributes.style=d+"background-image:url("+n+");"),i}}}})}});var e={toolbar:"Video",dialogTitle:"Video properties",fakeObject:"Video",properties:"Edit video",widthRequired:"Width field cannot be empty",heightRequired:"Height field cannot be empty",poster:"Poster image",sourceVideo:"Source video",sourceType:"Video type",linkTemplate:'<a href="%src%">%type%</a> ',fallbackTemplate:"Your browser doesn't support video.<br>Please download the file: %links%"},t={toolbar:"视频",dialogTitle:"视频属性",fakeObject:"视频",properties:"编辑视频",widthRequired:"宽度不能为空",heightRequired:"高度不能为空",poster:"海报图像",sourceVideo:"视频地址",sourceType:"视频类型",linkTemplate:'<a href="%src%">%type%</a> ',fallbackTemplate:"你的浏览器不支持此播放器.<br>请直接下载文件: %links%"},o={toolbar:"Video",dialogTitle:"Propiedades de video",fakeObject:"Video",properties:"Editar el video",widthRequired:"La anchura no se puede dejar en blanco",heightRequired:"La altura no se puede dejar en blanco",poster:"Imagen de presentación",sourceVideo:"Archivo de video",sourceType:"Tipo",linkTemplate:'<a href="%src%">%type%</a> ',fallbackTemplate:"Su navegador no soporta VIDEO.<br>Por favor, descargue el fichero: %links%"};CKEDITOR.skins&&(e={video:e},o={video:o},t={video:t}),CKEDITOR.plugins.setLang("video","en",e),CKEDITOR.plugins.setLang("video","es",o),CKEDITOR.plugins.setLang("video","zh-cn",t)}();