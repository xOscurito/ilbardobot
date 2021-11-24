module.exports = {
    name: 'mild',
    description: "send mild info",
    execute(message, args){

        message.channel.send({embed: {
            color: 0x9609e1,
            title: "Mnemonic Induced Lucid Dream",
            footer: {
                icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
                text: "| Made by Oscurito"
              },
            fields: [
              { name: "Step 1", value: "When you awaken naturally from a dream in the early morning, rehearse it several times until you have memorised it. "},
              { name: "Step 2", value: 'As you lay in bed, returning to sleep, say to yourself "The next time I am dreaming I will remember to recognise that Im dreaming"'},
              { name: "Step 3", value: "Imagine yourself back in the dream only this time see yourself becoming aware that you are dreaming."},
              { name: "Step 4", value: "Continue steps two and three until your have clearly set your intention or you return to sleep."},
              { name: "Similar techniques", value: "VILD, WRILD"}, 
              { name: "Source", value: "[TheLucidGuide](https://www.thelucidguide.com/Techniques/Mnemonic-Induction-of-Lucid-Dreaming-%28MILD%29)"},
              { name: "YT Videos", value: "[Updated MILD tutorial](https://youtu.be/IYus3vMplcY)\n[Older MILD tutorial](https://youtu.be/CSWH_Llf45k)"},
            ]
          }
        });
        
    }
}
