module.exports = {
    name: 'fallasleepfast',
    description: "send info about falling asleep fast",
    execute(message, args){

	message.channel.send({embed: {
            title: "Falling Asleep Fast",
            color: 6166501,
			footer: {
			  icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			  text: "| Made by Oscurito"
			},
			image: {
                url: "https://i.pinimg.com/originals/c4/32/54/c4325437c39ede63996c5ea637496b15.gif"
            },
			thumbnail: {
			  url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj"
			},
			
			fields: [
			  
				{ name: "Why does it help?", value: "Some lucid dreaming technique like SSILD require you to wake up in the middle of the night and then going back to sleep, and if you can do it quicker the technique will be more effective.\nIt can also improve the quality of your sleep."},
   	     	{ name: "How to fall asleep faster", value: "First thing to do, is to have a regular sleep cycle.\nSecond, during the day you should get as much sunlight as possible and during night you should make your room as dark as possible.\nWhen its bedtime, get rid of all sounds and distractions(you can listen to relaxing music or binaural beats) then get as comfortable as you can and relax all muscles (meditation can help with this step). in the end, clear your mind and think at one of the following images"}, 
			{ name: "Image 1", value: "Youre lying on a canoe on a calm lake.", inline: true},
			{ name: "Image 2", value: "Youre lying on a black hammock in a black room.", inline: true},
			{ name: "Image 3", value: 'Repeat the phrase "Dont think" over and over for 10 seconds than dont think at anything.\n\nYou want to focus on one of this things untill you fall asleep.'},
			{ name: "See also", value: "SSILD, binaural_beats, sleep_cycle, meditation"},
			{ name: "YT Videos", value: "[Falling Asleep Fast ELD Video](https://youtu.be/d-OFwFzscm4)\n[ASAP Science Falling Asleep Fast Video](https://youtu.be/EiYm20F9WXU)"},
			  
			]
		  }
		}
	)
 }
}