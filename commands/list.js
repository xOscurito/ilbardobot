module.exports = {
    name: 'list',
    description: "send a list of command",
    execute(message, args){

	message.channel.send({embed: {
			title: "Commands List",
			description: " ***```\nImportant: Use ld! as prefix before the command```***",
			color: 6166501,
			footer: {
			  icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			  text: "For bugs DM Oscurito#8849 | Made by Oscurito "
			},
			image: {
				url: "https://scontent.ccdn.cloud/image/nospoiler/ab58e801-f415-4e1d-8c0a-14c33eb52c16.gif"
			},
			thumbnail: {
			  url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj"
			},
			
			fields: [
			  {
				name: "Techniques",
				value: "ada\ncild\ndeild\nfild\nimp\nlove_method\nmild\nrausis\nspild\nssild\nvild\nwbtb\nwild\nwrild",
				 inline: true
			  },
			  {
				name: "Others",
				value: "best_technique\nbinaural_beats\ndream_journal\ndream_longer\nfall_asleep_fast\nmeditation\nreality_check\nsleep_cycle\nsleep_paralysis",
				 inline: true
			  },
			  {
				name: "Links",
				value: "[Officail Youtube](https://www.youtube.com/channel/UCF_gxHcSIPIyCV31oa1wWpA)\n[Patreon](https://www.patreon.com/exploreluciddreaming)\n[TheLucidGuide](https://www.thelucidguide.com/)"
			  }
			  
			]
		  }
		}
	)
 }
}