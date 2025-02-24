module.exports = [ 
 {
  command: ["1917style"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}1917style CASPER*`);
    }

    const link = "https://en.ephoto360.com/1917-style-text-effect-523.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in 1917style command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
 {
  command: ["advancedglow"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}advancedglow CASPER*`);
    }

    const link = "https://en.ephoto360.com/advanced-glow-effects-74.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in advancedglow command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
 {
  command: ["blackpinklogo"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}blackpinklogo CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in blackpinklogo command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["blackpinkstyle"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}blackpinkstyle CASPER*`);
    }

    const link = "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in blackpinkstyle command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
}, 
{
  command: ["cartoonstyle"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}cartoonstyle CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in cartoonstyle command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
}, 
{
  command: ["deadpool"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}deadpool CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in deadpool command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
}, 
{
  command: ["deletingtext"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}deletingtext CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in deletingtext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["dragonball"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}dragonball CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in dragonball command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["effectclouds"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}effectclouds CASPER*`);
    }

    const link = "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in effectclouds command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
}, 
{
  command: ["flag3dtext"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}flag3dtext CASPER*`);
    }

    const link = "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in flag3dtext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
}, 
 {
  command: ["flagtext"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}flagtext CASPER*`);
    }

    const link = "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in flagtext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
}, 
{
  command: ["freecreate"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}freecreate CASPER*`);
    }

    const link = "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in freecreate command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
}, 
 {
  command: ["galaxystyle"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}galaxystyle CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in galaxystyle command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
}, 
{
  command: ["galaxywallpaper"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}galaxywallpaper CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in galaxywallpaper command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
}, 
{
  command: ["glitchtext"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}glitchtext CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in glitchtext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
}, 
{
  command: ["glowingtext"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}glowingtext CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in glowingtext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["gradienttext"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}gradienttext CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in gradienttext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["graffiti"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}graffiti CASPER*`);
    }

    const link = "https://en.ephoto360.com/cute-girl-painting-graffiti-text-effect-667.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in graffiti command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["incandescent"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}incandescent CASPER*`);
    }

    const link = "https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in incandescent command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["lighteffects"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}lighteffects CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in lighteffects command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["logomaker"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}logomaker CASPER*`);
    }

    const link = "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in logomaker command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["luxurygold"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}luxurygold CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in luxurygold command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["makingneon"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}makingneon CASPER*`);
    }

    const link = "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in makingneon command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["matrix"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}matrix CASPER*`);
    }

    const link = "https://en.ephoto360.com/matrix-text-effect-154.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in matrix command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["multicoloredneon"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}multicoloredneon CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in multicoloredneon command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["neonglitch"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}neonglitch CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in neonglitch command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["papercutstyle"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}papercutstyle CASPER*`);
    }

    const link = "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in papercutstyle command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["pixelglitch"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}pixelglitch CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in pixelglitch command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["royaltext"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}royaltext CASPER*`);
    }

    const link = "https://en.ephoto360.com/royal-text-effect-online-free-471.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in royaltext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["sand"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}sand CASPER*`);
    }

    const link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in sand command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["summerbeach"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}summerbeach CASPER*`);
    }

    const link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in summerbeach command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["topography"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}topography CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in topography command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["typography"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}typography CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in typography command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["watercolortext"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}watercolortext CASPER*`);
    }

    const link = "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in watercolortext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
},
{
  command: ["writetext"],
  operate: async ({ m, args, reply, Cypher, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}writetext CASPER*`);
    }

    const link = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";

    try {
      let result = await ephoto(link, q);
      await Cypher.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in writetext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
}
];
