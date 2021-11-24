module.exports = {
    name: 'spild',
    description: "send spild info",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
   	    title: "Sleep Paralysis Induced Lucid Dream",
		   footer: {
			   icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			   text: "| Made by Oscurito"
			 },
  	    fields: [
   	     	{ name: "CASE 1", value: "You accidentally experience sleep paralysis"},
   	     	{ name: "Step 1", value: "Stay calm, try to resist any physical urges such as itching, movement, or strange bodily sensations."},
  	     	{ name: "Step 2", value: "Close your eyes and relax. Allow yourself to return to sleep.\nIf the conditions are favourable and you follow the above steps you should be able to enter a dream almost instantly, maintaining awareness, and therefore induce a Wake Initiated Lucid Dream (WILD)(Type ld!wild if you need more information about WILD)."},
			{ name: "CASE 2", value: "Learning to voluntarily enter sleep paralysis."},
			{ name: "Step 1", value: "Lay flat on your back in your bed and close your eyes. Try to keep your limbs separated; avoid the crossing  or touching of your arms and legs. Resist all urges to itch or move."},
			{ name: "Step 2", value: "Ignore everything and remain still, attempt to fool your brain and body into thinking that you are asleep while maintaining your consciousness. This is a good time to use the IMP technique(Type ld!imp if you need more information about IMP technique)."},
			{ name: "Step 3", value: "You are likely to experience hypnagogic hallucinations, such as buzzing sounds, bodily distortions, visual hallucinations, or you may feel a pressure on your body. These are natural and nothing to fear, try to enjoy the unusual experience."},
			{ name: "Step 4", value: "The onset of sleep paralysis signifies the primary entry-point into the dream state. Allow yourself to continue to fall into sleep and dreams until you find yourself in a fully formed dream."},
			{ name: "Similar techniques", value: "WILD, DEILD, CILD"}, 
			{ name: "Source", value: "[TheLucidGuide](https://www.thelucidguide.com/Techniques/Sleep-Paralysis-Induced-Lucid-Dream-%28SPILD%29)"},
			{ name: "YT Videos", value: "[SPILD tutorial](https://youtu.be/X_UFwfUipuU)\n[Sleep Paralysis Playlist](https://www.youtube.com/playlist?list=PLcMceWkJeB2N_EDZb0UwtDuTcwRoqin2b)"},
			  
 	     ]
 	   }
	});

    }

}