module.exports = {
    name: 'wild',
    description: "send wild info",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
   	    title: "Wake Induced Lucid Dream",
		   footer: {
			   icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			   text: "| Made by Oscurito"
			 },
  	    fields: [
   	     	{ name: "Step 1", value: "Wake yourself up after 4 to 6 hours of sleep, get out of bed and stay up for anywhere between a few minutes to an hour before going back to bed. It is preferable that you do something related to lucid dreaming during this time, but it is not required."},
   	     	{ name: "Step 2", value: "Go back to bed and lie absolutely still, as if your body is melting into the mattress and losing all sensation. Silence your inner monologue if it starts to chime in. You may hear hypnagogic sounds, echoes of voices and other sounds in your head."},
  	     	{ name: "Step 3", value: "Once in the half-dream state, you will experience hypnagogia as a mixture of patterns and colors that take over your vision in the darkness. Observe your hypnagogia and stay relaxed, allowing it to hypnotize you and draw your awareness away from the outside world  into the internal dream world that is starting to evolve now."},
 	        { name: "Step 4", value: "Remember to perform a reality check once the dream has formed. This is essentially unnecessary as it is generally quite apparent that one is dreaming, however it is good practice and will help solidify your lucidity"},
 	        { name: "ATTENTION", value: "Since your consciousness is still linked to your physical body, which is now asleep, you may feel the effects of sleep paralysis. This is a natural protection mechanism which stops you from acting out your dreams. It happens every night, but usually by this stage your mind is asleep too. So if you feel like your limbs are going numb, or a lead blanket is moving up your body, don’t fight it. Instead, relax and rejoice in the fact that you are about the enter a Wake Induced Lucid Dream"},
			{ name: "Similar techniques", value: "SPILD, DEILD, CILD"},  
			{ name: "Source", value: "[Explore Lucid Dreaming YT](https://www.youtube.com/channel/UCF_gxHcSIPIyCV31oa1wWpA)"},
			{ name: "YT Videos", value: "[Updated WILD tutorial](https://youtu.be/0XgF_59b9Cc)\n[Old WILD tutorial](https://youtu.be/ySIEeU2LgZs)"},
			  
 	     ]
 	   }
 	 });

    }

}
