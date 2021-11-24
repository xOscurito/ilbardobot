module.exports = {
    name: 'realitycheck',
    description: "send reality checks info",
    execute(message, args){

	message.channel.send({embed: {
            title: "Reality Check",
            color: 6166501,
            image: {
                url: "https://static.wixstatic.com/media/d50957_bd50ab82fc0348d8b00d9c728593c88e~mv2.jpg/v1/fill/w_953,h_304,al_c,q_80,usm_0.66_1.00_0.01/Girl%20Behind%20a%20Sheet.webp"
            },
			footer: {
			  icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			  text: "| Made by Oscurito"
			},
			thumbnail: {
			  url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj"
			},
			
			fields: [
			  
   	     	{ name: "What is a Reality check?", value: "A reality check, also known as a reality test, is a staple and vital aspect of standard lucid dream practice. In essence, a reality check is a simple test one performs to establish if one is either dreaming or awake."},
   	     	{ name: "How to do it", value: "there are many different rc's. Some of them are listed below.\nCounting fingers\nLook at the clock\npinch your nose and try to breathe\ntry to pass your index through your hand"}, 
			{ name: "Source", value: "[TheLucidGuide](https://www.thelucidguide.com/Techniques/Reality-Check)"},
			{ name: "YT Videos", value: "[ELD Reality Check video](https://youtu.be/Ryl_le2QfmM)"},
			  
			]
		  }
		}
	)
 }
}