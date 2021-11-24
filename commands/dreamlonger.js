module.exports = {
    name: 'dreamlonger',
    description: "send info about stabilizing dreams",
    execute(message, args){

	message.channel.send({embed: {
            title: "Stabilize your Dreams",
            color: 6166501,
			footer: {
			  icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			  text: "| Made by Oscurito"
			},
            image: {
                url: "https://steamuserimages-a.akamaihd.net/ugc/937195274282034305/E972E96F5AE39448ECC52E426DFFD93523026CDB/"
            },
			thumbnail: {
			  url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj"
			},
			
			fields: [
			  
   	     	{ name: "How to stabilize your dream", value: "Often lucid dreams ar blurry or last for only few seconds. You should stabilize your dreams before doing exciting things that will lead you to waking up.\nThe first thing you have to do after becoming lucid is to calm down and observe your surrounding, focusing on details. Then you can try rubbing your hands or spinning arround, that should help stabilizing the dream."},
			{ name: "YT Videos", value: "[Dream Longer ELD Video](https://youtu.be/0VA9PnR_28o)"},
			  
			]
		  }
		}
	)
 }
}