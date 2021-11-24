module.exports = {
    name: 'ssild',
    description: "send ssild info",
    execute(message, args){

        message.channel.send({embed: {
            color: 0x9609e1,
            title: "Senses Induced Lucid Dream",
            footer: {
                icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
                text: "| Made by Oscurito"
              },
            fields: [
              { name: "The Cycle", value: "The core component of SSILD is called a Cycle. Each cycle consists three steps:"},
              { name: "Step 1: Focus on Sight", value: "Close your eyes and pay attention to the darkness behind your closed eyelids. Don't strain your eye muscles though. Your eyeballs should be resting, totally relaxed. If you don't see anything that's only normal. Do not attempt to spot visuals by moving your eyes around."},
              { name: "Step 2: Focus on Hearing", value: "Further relax your eyes and shift your attention to your ears. If the room is quiet enough you might be able to hear some noise inside your head or the sound of your heartbeat. However, if you can't hear anything it is okay to listen to external sounds too."},
              { name: "Step 3: Focus on Touch", value: "Direct your attention to your body. Feel it and see if you spot any unusual sensations such as tingling, heaviness, lightness, spinning sensations, and so on. If nothing like these can be felt, you can also try to feel the weight of the blanket, your heartbeat, temperature of the air, etc."},
              { name: "The Steps", value: "How to use SSILD"}, 
              { name: "Step 1", value: "Go to bed early, preferably before 11pm. Set your alarm to wake up after 4 or 5 hours."}, 
              { name: "Step 2", value: "Get out of bed and stay awake for 5-10 minutes. I suggest you visit the bathroom, rinse your mouth, and walk around or stretch a little bit. Try not to become too awake though."}, 
              { name: "Step 3", value: "Return to bed and lie down in a comfortable position, preferably different from the one you usually use. This is to prevent you from falling into sleep prematurely. However, if you are the type of person who requires extra effort to fall asleep, you may want to use the usual position instead."}, 
              { name: "Step 4", value: "Perform the Cycle quickly, repeat 4-6 times. This serves as a warm-up exercise so each step should be very short, a few seconds should be sufficient."}, 
              { name: "Step 5", value: "Perform the Cycle slowly, repeat 3-4 times. This step is the most important one. You should take extra time during each step. Thanks to step 4, at this point you should have become sufficiently relaxed and you will find focusing on the senses become much easier."}, 
              { name: "Step 6", value: "Return to the most comfortable position and allow yourself fall into sleep as quickly as possible. Do not think too much and do not worry if it will work. The quicker you can fall asleep the more likely it will work. Have faith!"}, 
              { name: "Source", value: "[TheLucidGuide](https://www.thelucidguide.com/Techniques/Senses-Initiated-Lucid-Dream-%28SSILD%29)"},
              { name: "YT Videos", value: "[SSILD tutorial](https://youtu.be/F1dZefxHqXQ)"},
            ]
          }
        });

    }
}
