import { Box, Typography } from "@mui/material";

/** SECTIONS */
export type sectionType = {
  title: string;
  url: string;
};
export const const_sections: sectionType[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
];

/** SUB SECTIONS */
export const const_subSections = [
  {
    title: "Experience",
    description: (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography>
          I am a seasoned engineer with a diverse background spanning over two
          decades in the tech industry. My career began in IT support, where I
          honed my problem-solving and quickly became adept at navigating the
          complexities of complex software solutions.
        </Typography>
        <Typography>
          Transitioning into software engineering, my expertise grew to
          encompass the development of secure data communications solutions,
          avionics test systems and robust cyber web applications. As a
          technical leader, I inspired my teams to push the boundaries of
          innovation, challenging ourselves to produce advanced software
          solutions, streamlining project management and development processes;
          ensuring timely delivery whilst maintaining high-quality standards.
        </Typography>
        <Typography>
          My multifaceted experience across various domains has not only made me
          a valuable asset to any organization but also a visionary, constantly
          seeking to merge technical excellence with business acumen.
        </Typography>
      </Box>
    ),
  },
  {
    title: "Projects",
    description: (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography>
          I am currently engaged in a variety of interesting personal software
          development projects that showcase my versatility and technical
          prowess.
        </Typography>
        <Typography>
          A Weather Web App, that is leveraging free APIs to present users with
          accurate weather forecasts, integrating data seamlessly into a
          user-friendly interface.
        </Typography>
        <Typography>
          A Classic Space Invaders Game, tapping into nostalgia by creating a
          Javascript and HTML5 clone of the iconic arcade game, ensuring smooth
          gameplay and retro fun.
        </Typography>
        <Typography>
          A Project Tracker Mobile App reflecting my mobile development skills,
          utilizing Kotlin and the Room database for an efficient Android
          application that helps users manage their projects effectively.
        </Typography>
        <Typography>
          A Cryptography Library demonstrating a deep understanding of
          encryption principles, implementing a C++ library capable of
          encrypting and decrypting data with various cipher techniques.
        </Typography>
      </Box>
    ),
  },
  {
    title: "Fun",
    description: (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography>
          My leisure time is filled with a delightful variety of activities that
          bring joy and relaxation.
        </Typography>
        <Typography>
          As an avid fan of the WSL Championship Tour, I revel in the thrill of
          surfing competitions, following the world’s best surfers as they
          conquer the waves.
        </Typography>
        <Typography>
          I have a passion for whiskey and beer which turns into an exploratory
          journey, nerding out over the intricate flavors and brewing techniques
          that make each bottle unique.
        </Typography>
        <Typography>
          Knitting by the fire offers a cozy retreat, where each stitch is a
          meditative practice that results in beautiful, handcrafted creations.
        </Typography>
        <Typography>
          In my garden, I cultivate not just vegetables but patience and care,
          enjoying the fruits of my labor with every harvest. And there’s
          nothing quite like hiking through the local orchards, where the beauty
          of nature and the scent of fresh fruit invigorate your senses and
          connect you to the earth.
        </Typography>
      </Box>
    ),
  },
];
