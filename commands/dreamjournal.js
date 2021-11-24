module.exports = {
    name: 'dreamjournal',
    description: "send dream journal info",
    execute(message, args){

	message.channel.send({embed: {
            title: "Dream Journal",
            color: 6166501,
            image: {
                url: "https://sednainspired.com/wp-content/uploads/SEDNAINSPIRATIONS092319-1300x650.jpg"
            },
			footer: {
			  icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			  text: "| Made by Oscurito"
			},
			thumbnail: {
			  url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj"
			},
			
			fields: [
			  
   	     	{ name: "What is Dream Journal", value: "A dream journal is a something (it can be a diary, an applications or a notebook) where you write every dream you have."},
   	     	{ name: "Benefits", value: "Dream journaling improve your dream recall, so it will be easy remembering your dreams.\nReading back your dreams you can easly find dream sign, namely something that you see or find often in your dreams."}, 
			{ name: "Dream journal applications", value: "Lucidity is one of the most used dream journal applications, on both IOs and Android. Lucidity have a free and a premium version, but the free one have all that you need to start a good dream journal."},
            { name: "YT Videos", value: "[Dream Journal ELD video](https://youtu.be/KIDu8fIJfhc)"},
			
			]
		  }
		}
	)
 }
}