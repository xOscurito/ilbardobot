module.exports = {
    name: 'cild',
    description: "send cild info",
    execute(message, args){

        message.channel.send({embed: {
            color: 0x9609e1,
            title: "Counting Induced Lucid Dreaming",
            footer: {
                icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
                text: "| Made by Oscurito"
              },
              image :{
                url: "https://belucidnow.com/wp-content/uploads/2019/10/Dream-Numbers.jpg"
              },
            fields: [
                { name: "Step 1", value: "Get 4-6 hours of sleep. Wake up for a few minutes, then go back to bed."},
                { name: "Step 2", value: 'Allow yourself to relax and get comfortable.'},
                { name: "Step 3", value: "Set your intention. Repeat something like, “I will become lucid in my dreams,” or “I will be aware I’m dreaming in my dreams.” Repeat it confidently to yourself 4 or 5 times."},
                { name: "Step 4", value: "Start at 100, then begin to count backwards. Focus on the numbers, but allow yourself to become heavy and sleepy.(You can also count from 1 to 100 but doing it backwards need more focus)"},
                { name: "Step 5", value: "If you feel yourself drifting into other thoughts, simply bring your attention back to the numbers."},
                { name: "Step 6", value: "Depending on how tired you are, you may not make it past the 80’s. At this point, if you have fallen asleep, you might trigger a lucid dream simply from your concentration and set intention. However, it is more likely that you will begin to transition into a dream. If you see a scene appear in your mind, step into and allow it to become clearer and more vivid. Eventually, you will transition fully into the lucid dream."},
                { name: "Similar techniques", value: "SPILD, DEILD, WILD"}, 
                { name: "Source", value: "[BeLucidNow](https://belucidnow.com/counting-induced-lucid-dream-technique/)"},
                { name: "YT Video", value: "[CILD tutorial](https://youtu.be/DX4jbyu7578)"},
               ]
          }
        });

    }
}