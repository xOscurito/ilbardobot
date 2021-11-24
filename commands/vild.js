module.exports = {
    name: 'vild',
    description: "send vild info",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
   	    title: "Visual Induced Lucid Dream",
		   footer: {
			   icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			   text: "| Made by Oscurito"
			 },       
             image: {
                url: "https://static.wixstatic.com/media/4885f746b4de44e5b60b4504bcafff42.jpg/v1/fill/w_953,h_304,al_c,q_80,usm_0.66_1.00_0.01/Girl%20Behind%20a%20Sheet.webp"
               },
  	    fields: [
   	     	{ name: "Step 1", value: "During a natural awakening in the night or after performing the WBTB technique, relax and prepare to return to sleep."},
   	     	{ name: "Step 2", value: 'Visualize a detailed but simple scene including a reality check, a "target dream", which you have prepared earlier. Ideally aim for a simple and familiar scene, something that is easy to imagine.\nExample: I am standing in the kitchen. A friend asks me to show them what a reality check is. I demonstrate a reality check (which cues me to realize I am dreaming), I tell them that I am dreaming, and head towards the door.'},
  	     	{ name: "Step 3", value: "Make sure you have fully prepared all the details of the visualization: which friend, the exact words they say, and which reality checks you perform. Reality checks that require no props, such as the nose pinch test, are recommended."},
 	        { name: "Step 4", value: "Slowly visualize the dream three times, to fully prepare each detail. Then, increase the intensity, and continue to visualize the dream over and over. *You should visualize the dream from a first person perspective*."},
            { name: "Step 5", value: "Continue this process until you these imaginings become a full fledged dream, at which point the included reality check will cue you to become lucid."},
            { name: "Similar techniques", value: "MILD, WRILD"},
			{ name: "Source", value: "[TheLucidGuide](https://www.thelucidguide.com/Techniques/Visual-Induction-of-Lucid-Dreams-%28VILD%29)"},
 	        { name: "YT Video", value: "[VILD tutorial](https://youtu.be/Ht9m07jSTGQ)"},
 	     ]
 	   }
 	 });

    }

}