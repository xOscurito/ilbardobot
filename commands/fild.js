module.exports = {
    name: 'fild',
    description: "send fild info",
    execute(message, args){

        message.channel.send({embed: {
            color: 0x9609e1,
            title: "Finger Induced Lucid Dreaming",
            image: {
                url: "https://i.insider.com/56ee0a82910584cc5e8b762f?width=750&format=jpeg&auto=webp"
            },
            footer: {
                icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
                text: "| Made by Oscurito"
              },
            fields: [
                { name: "Step 1", value: "In order to perform FILD, you first have to wake up at a time when you'll be tired enough fall to sleep again (WBTB), for most people this is 4 to 5 hours after you have gone to bed. This is also when you will most likely awake from a REM phase. Relaxation is vital when performing this technique."},
                { name: "Step 2", value: 'Start moving your index finger and your middle finger up and down repeatedly as if you were playing two keys on a piano. Do this for 30 seconds. Do not count the seconds in your head or out loud, just estimate how long its been. Tell yourself that you are going to do a nose pinch reality check while you are moving your fingers.'},
                { name: "Step 3", value: "After the estimated 30 seconds you will then stop moving your finger and do a nose pinch reality check and, if you are able to breathe through your pinched nose, then you are dreaming! If you can't breathe then you are still in waking reality."},
                { name: "Step 4", value: "If you discover that you are not dreaming, then just wait for a few moments then repeat steps two and three. Continue to perform these steps until you enter a lucid dream, or become too sleepy to continue."},
                { name: "Similar techniques", value: "IMP"}, 
                { name: "Source", value: "[TheLucidGuide](https://www.thelucidguide.com/Techniques/Finger%2FFocus-Induced-Lucid-Dream-%28FILD%29)"},
                { name: "YT Video", value: "[FILD tutorial](https://youtu.be/TzV8-CSofG0)\n[Daniel Love FILD tutorial](https://youtu.be/thbr8Tm1E6U)"},
               ]
          }
        });

    }
}
