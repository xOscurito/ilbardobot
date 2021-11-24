module.exports = {
    name: 'sleepp',
    description: "send sleep paralysis info",
    execute(message, args){

        message.channel.send({embed: {
            color: 0x9609e1,
            title: "Sleep Paralysis",
            footer: {
                icon_url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj",
                text: "| Made by Oscurito"
              },
              thumbnail: {
                url: "https://yt3.ggpht.com/ytc/AAUvwniIz_ZP4P3fjwh7E9Ah2EGUQB7rWg1CxCwmdyX_5w=s900-c-k-c0x00ffffff-no-rj"
              },        
            image: {
               url: "https://static.wixstatic.com/media/d50957_1cd51dd221d4494a87b23e0dda4dbfef~mv2.jpg/v1/fill/w_931,h_297,al_c,q_80/Girl%20Behind%20a%20Sheet.webp"
              },
            fields: [
              { name: "What is Sleep Paralysis?", value: "Sleep paralysis(SP) is a feeling of being conscious but unable to move. It occurs when a person passes between stages of wakefulness and sleep. During these transitions, you may be unable to move or speak for a few seconds up to a few minutes. Some people may also feel pressure, allucinations or a sense of choking."},
              { name: "Do you Need SP for Lucid Dreaming?", value: 'No. There is only some technique that use or have high risk of causing sleep paralysis.\nThis techniques are WILD or similar and you should avoid them if you are afraid of having sleep paralysis.'},
              { name: "Using Sleep paralysis for Lucid Dreaming", value: "SPILD (Sleep Paralysis Induced Lucid Dream) is a technique that exploits sleep paralysis for entering a lucid dream.\nIf you want more information about SPILD use the command ld!spild."},
              { name: "YT Videos", value: "[Sleep paralysis playlist](https://www.youtube.com/playlist?list=PLcMceWkJeB2N_EDZb0UwtDuTcwRoqin2b)"},
            ]
          }
        });

    }
}