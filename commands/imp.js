module.exports = {
    name: 'imp',
    description: "send imp info",
    execute(message, args){

        message.channel.send({embed: {
            color: 0x9609e1,
            title: "Impossible Movement Practice",
            image: {
                url: "https://static.wixstatic.com/media/d50957_b130cba4116a427583c09a74f4a8a179~mv2.jpeg/v1/fill/w_953,h_304,al_c,q_80,usm_0.66_1.00_0.01/Girl%20Behind%20a%20Sheet.webp"
            },
            footer: {
                icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
                text: "| Made by Oscurito"
              },
            fields: [
                { name: "Step 1", value: "Once you have returned to bed during a WBTB, and have assumed the position in which you are likely to fall asleep (ideally lying on your back), you need to establish any physical movements that would be impossible to perform in your current position.\n\nFor example, should your hand be flat beneath your head, it would be physically impossible to form a clenched fist. There are countless variations possible here; you just have to decide which position you wish to lie in."},
                { name: "Step 2", value: 'Once you have made your choice, you now need to continue to imagine the impossible movement repeated over and over.\nContinue to repeat this process as you fall back to sleep.'},
                { name: "Step 3", value: "What you should eventually experience is the imagined sensation suddenly shifts to a completely realistic and tangible tactile experience; it will really feel as if you have moved in this way.\nOnce this occurs, and the transition between your physical and dream body has happened, you are dreaming."},
                { name: "Similar techniques", value: "FILD"}, 
                { name: "Source", value: "[TheLucidGuide](https://www.thelucidguide.com/Techniques/Impossible-Movement-Practice-%28IMP%29)"},
                { name: "YT Video", value: "No videos yet"},
               ]
            }
        });

    }
}