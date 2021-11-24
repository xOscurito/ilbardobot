module.exports = {
    name: 'wbtb',
    description: "send wbtb info",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
   	    title: "Wake Back To Bed",
		   footer: {
			   icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			   text: "| Made by Oscurito"
			 },
  	    fields: [
   	     	{ name: "Step 1", value: "Set an alarm to wake you after four to five hours sleep, then retire to bed. When setting the alarm, understand that the aim is to interrupt your sleep cycle just prior to entering the stage in which REM (dreaming) sleep is  most prevalent."},
   	     	{ name: "Step 2", value: "Go to sleep (Easy one)."},
  	     	{ name: "Step 3", value: "Upon waking from your alarm, get out of bed and occupy yourself for 15-90 minutes (you will need to experiment to find your optimal time - for most it is roughly 20 minutes). Do whatever is required to make your mind alert and active, but without going as far as to make returning to sleep impossible."},
 	        { name: "Step 4", value: "Return to bed with the firm intention to recognise that you are dreaming once it occurs. Allow yourself to relax and fall back into sleep (generally at this point, dreamers will also be employing a second psychological technique to improve their chances of success)."},
			{ name: "Similar techniques", value: "Cat_method, love_method, "},   
			{ name: "Source", value: "[TheLucidGuide](https://www.thelucidguide.com/Techniques/Wake-Back-To-Bed-%28WBTB%29)"},
 	        { name: "YT Video", value: "[WBTB tutorial](https://youtu.be/V0LXfhqNoLc)"},
 	     ]
 	   }
 	 });

    }

}