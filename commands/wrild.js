module.exports = {
    name: 'wrild',
    description: "send wrild info",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
   	    title: "Writing Induced Lucid Dream",
		   footer: {
			   icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			   text: "| Made by Oscurito"
			 },
  	    fields: [
   	     	{ name: "Step 1", value: "Before going to sleep write on a piece of paper a short phrase over and over like 'I will lucid dream tonight'. It is important to use actual paper and not your phone."},
   	     	{ name: "Step 2", value: 'Keep writing this phrase again and again so the idea you are writing will stuck in your brain. Write this phrase 50-100 times.'},
  	     	{ name: "Step 3", value: "You have to confince yourself that what you are writing is true and that it will happen."},
 	        { name: "Step 4", value: "Place your piece of paper near your bed and go to sleep.\nYou can also use this technique combined with some other techniques like WBTB to improve the chance of success."},
            { name: "Similar techniques", value: "MILD, VILD"},
 	        { name: "YT Video", value: "[WRILD tutorial](https://youtu.be/4o6JhW6YFOs)"},
 	     ]
 	   }
 	 });

    }

}