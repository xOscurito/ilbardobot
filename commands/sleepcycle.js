module.exports = {
    name: 'sleepcycle',
    description: "send sleep cycle info",
    execute(message, args){

	message.channel.send({embed: {
  	    color: 0x9609e1,
		   title: "Sleep Cycle",
		   image: {
					url: "https://i.pinimg.com/originals/eb/01/9c/eb019cb4d050fa68d390e720f568daf4.jpg"
		   },
		   footer: {
			   icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
			   text: "| Made by Oscurito"
             },
            thumbnail: {
			  url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj"
			},
  	    fields: [
   	     	{ name: "What is the Sleep Cycle?", value: "Sleep is not uniform. Instead, over the course of the night, your total sleep is made up of several rounds of the sleep cycle, which is composed of four individual stages. In a typical night, a person goes through four to six sleep cycles. Not all sleep cycles are the same length, but on average they last about 90 minutes each."},
   	     	{ name: "Wake Stage", value: "Youre awake"},
  	     	{ name: "NREM1 Stage", value: "This is the lightest stage of sleep. This stage tends to last 1 to 5 minutes."},
 	        { name: "NREM2 Stage", value: "This stage represents deeper sleep as your heart rate and body temperate drop.As deeper sleep ensues and the individual moves into NREM3. All of their waves will be replaced with delta waves. Stage 2 sleep lasts around 25 minutes in the initial cycle and lengthens with each successive cycle."},
			{ name: "NREM3 Stage", value: "This is considered the deepest stage of sleep and is characterized by a much slower frequency with high amplitude signals known as delta waves. This stage is the most difficult to awaken from. This is the stage when the body repairs and regrows its tissues, builds bone and muscle, and strengthens the immune system."}, 
			{ name: "REM Sleep", value: "This is the stage associated with dreaming. Interestingly, the EEG is similar to an awake individual, but the skeletal muscles are atonic and without movement. The exception is the eye and diaphragmatic breathing muscles, which remain active.\n **This stage usually starts 90 minutes after you fall asleep, and each of your REM cycles gets longer throughout the night. The first period typically lasts 10 minutes, and the final one can last up to an hour** "}, 
			{ name: "Source", value: "[NCBI National Center for Biotechnology Information](https://www.ncbi.nlm.nih.gov/books/NBK526132/)"},
			
 	     ]
 	   }
 	 });

    }

}
