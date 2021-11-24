module.exports = {
    name: 'besttech',
    description: "send info about various technique",
    execute(message, args){

	message.channel.send({embed: {
            title: "What's the Best LD Techniqe?",
            color: 6166501,
			footer: {
			  icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			  text: "| Made by Oscurito"
			},
			thumbnail: {
			  url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj"
			},
			
			fields: [
			  
   	     	{ name: "There isnt a better technique", value: "Everyone is different, and there's not a best technique for everyone."},
   	     	{ name: "Easier or Harder", value: "If you are a beginner, people (Hopefully) wont tell you too try WILD the first nght because its one of the hardest techniques out there.\nI personally suggest to start with MILD and WBTB (or any other method where you wake up during night).\nOther techniques like WILD or FILD grants more vivid and stable lucid dream, but also have risks of causing sleep paralysis, that lots of people fear"}, 
			{ name: "Find what is the best for you", value: "You can try different techniques and see what you like most or you find easier."},
			{ name: "YT Videos", value: "[Best Technique ELD Video](https://youtu.be/JegRDhyRkfo)"},
			  
			]
		  }
		}
	)
 }
}