module.exports = {
    name: 'lovemethod',
    description: "send love method info",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
   	    title: "The Love Method",
		   footer: {
			   icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			   text: "| Made by Oscurito"
			 },
  	    fields: [
   	     	{ name: "Introduction", value: "The Love Method is a new lucid dreaming technique and the brainchild of lucid dreaming researcher and teacher, Daniel Love.\nThe Love Method breaks from traditional lucid dreaming advice to focus on the *final REM stages of sleep*, and instead aims to induce lucidity in the second REM phase of the night, what Love calls **The Golden REM Stage**.\nIf you want more information about REM sleep and sleep cycles type ld!sleep_cycle."},
            { name: "Step 1", value: "When going to bed, set your alarm to wake you after 2½ hours sleep.\nAlso, take a note of the time you retire to bed."},   
            { name: "Step 2", value: "When woken, get up and stay awake for ten minutes. Get out of bed and stand up (get vertical!).\nPerform a thorough reality check (If you want more information about reality checks type ld!reality_check).\nTake 15 quick deep breaths, in through your nose, out through your mouth. After each exhale remind yourself of your goal to recognize when you are dreaming.If you have time left, do anything else that you find helps to increase your critical awareness."},
            { name: "Step 3", value: "Once the ten minutes have elapsed, return to bed. Tell yourself that you will soon be dreaming, and will recognise that you are dreaming, then allow yourself to fall asleep naturally.\nAs you fall back to sleep try to imagine yourself rolling out of bed."},
			{ name: "Similar techniques", value: "WBTB, cat_method"},   
			{ name: "Source", value: "[TheLucidGuide](https://www.thelucidguide.com/Techniques/The-Love-Method)"},
 	        { name: "YT Video", value: "[Daniel Love The Love Method tutorial](https://youtu.be/wff7w2KVYxo)"},
 	     ]
 	   }
 	 });

    }

}