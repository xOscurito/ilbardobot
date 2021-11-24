module.exports = {
    name: 'rausis',
    description: "send rausis info",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
   	    title: "Rausis Technique",
		   footer: {
			   icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			   text: "| Made by Oscurito"
			 },
  	    fields: [
   	     	{ name: "Step 1", value: "Before you go to sleep, you should take your phone and:\n **1) Set a normal alarm** – around 2 hours earlier to your usual waking time\n **2) Set a second alarm** – it should be 3 minutes AFTER the first alarm.It also needs to be with a DIFFERENT sound – something that exists in the real world, that you can recognize (bell, waterfall, birds, etc.)"},
   	     	{ name: "Step 2", value: "When the first alarm rings, you should just open your eyes for a few seconds, turn it off very fast, and go back to sleep (remember: try to move as little as possible, so you won’t wake up fully). Tell yourself that after you’re back to sleep, you will hear the second alarm in your next dream."},
  	     	{ name: "Step 3", value: "When you go to sleep, after 3 minutes, the other alarm should ring. The noise should appear in your dream. You will discover it in your dream, which should make you lucid!\nYou need to use an app on your phone for the second alarm, that will stop automatically in 30 seconds or so.Otherwise, you risk to wake up again, which will ruin the whole experience."},
  	        { name: "Source", value: "[Lucid Dream Society](https://www.luciddreamsociety.com/the-rausis-method/)"},
 	        { name: "YT Video", value: "[RAUSIS tutorial](https://youtu.be/PYKFJuNGAvI)"},
 	     ]
 	   }
 	 });

    }

}