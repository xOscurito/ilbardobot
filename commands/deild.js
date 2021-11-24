module.exports = {
    name: 'deild',
    description: "send deild info",
    execute(message, args){

        message.channel.send({embed: {
            color: 0x9609e1,
            title: "Dream Exit Induced Lucid Dream",
            image: {
                url: "https://clevertronics.co.uk/wp-content/uploads/2018/11/sequence-animations-dyngrn-002-1-1.gif"
            },
            footer: {
                icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
                text: "| Made by Oscurito"
              },
            fields: [
                { name: "Step 1", value: "Practice increasing one's awareness of the regular brief awakenings that occur after a period of REM."},
                { name: "Step 2", value: 'When such an awakening occurs, be certain to remain absolutely still. The idea is to avoid any physical movement that will pull you out of sleep. Instead, remain in the position you find yourself. This will allow sleep paralysis to reengage and a rapid reentry into the dreaming state.'},
                { name: "Step 3", value: "During this brief period of wakefulness, attempt to visualize a scene, physical movement, or both. Good examples include: rolling out of the bed, running or dancing around your bedroom, or any scene or movement you find easy to imagine."},
                { name: "Step 4", value: "Continue this imagining until the scene/movement is no longer a vague phantom of the imagination and has becomes the vividly realistic experience of a dream."},
                { name: "Attention", value: "You may enter a period of sleep paralysis during this process, this can be unsettling for those who are unfamiliar with the experience. However, it is nothing to fear and is a sign that the technique is working. Simply ride it out until the dream has formed. "},
                { name: "Step 5", value: "Remember to perform a reality check once the dream has formed. This is essentially unnecessary as it is generally quite apparent that one is dreaming, however it is good practice and will help solidify your lucidity."},
                { name: "Step 6", value: "If the dream fades and you find yourself waking up, start the process again from step 1. In this manner it can be possible to have multiple lucid dreams in a row, a process known as 'dream chaining'."},
                { name: "Similar techniques", value: "SPILD, WILD, CILD"}, 
                { name: "Source", value: "[TheLucidGuide](https://www.thelucidguide.com/Techniques/Dream-Exit-Induced-Lucid-Dream-%28DEILD%29)"},
                { name: "YT Video", value: "No videos yet"},
               ]
            }
        });

    }
}