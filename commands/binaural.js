module.exports = {
    name: 'binaural',
    description: "send info about binaural beats",
    execute(message, args){

	message.channel.send({embed: {
            title: "Binaural Beats",
            color: 6166501,
			footer: {
			  icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			  text: "| Made by Oscurito"
			},
			thumbnail: {
			  url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj"
			},
			
			fields: [
			  
   	     	{ name: "What are Binaural Beats?", value: "When you hear two tones, one in each ear, that are slightly different in frequency, your brain processes a beat at the difference of the frequencies. This is called a binaural beat."},
   	     	{ name: "Benefits", value: "Binaural beats are claimed to induce the same mental state associated with a meditation practice, but much more quickly. In effect, binaural beats are said to: reduce anxiety,incrase focus and concentration, lower stress, increase relaxation, promote creativity, foster positive moods and help manage pain."}, 
            { name: "Binaural Beats for Lucid dreaming", value: "Binaural beats that entrain your brain to the theta and delta brainwave frequencies should actually help lucid dreaming.\nTheta brainwaves are associated with the hypnagogic state of consciousness, which is the transitional state between wakefulness and sleep just before the onset of sleep.\nTheta is a deeply relaxed and dreamlike state, which is ideal for lucid dreaming."},
			{ name: "Source", value: "[HealthLine](https://www.healthline.com/health/binaural-beats)"},
			{ name: "YT Videos", value: "[Binaural Beats ELD Video](https://youtu.be/WcrDEXanFaQ)"},
			  
			]
		  }
		}
	)
 }
}