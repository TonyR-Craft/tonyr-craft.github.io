import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import SkillLogoLink from './SkillLogoLink';
import { const_skills } from '../../constants/skills';
const Skills = () => {
  const theme = useTheme();

  return (
    <Box id="Skills" sx={{ py: 4 }}>
      <Typography
        component="h5"
        variant="h5"
        align="center"
        color="text.secondary"
      >
        Skills, Frameworks & Technologies
      </Typography>
      <Grid container direction={"row"} alignItems="center" justifyContent="center" sx={{ py: 1 }}>
        {const_skills.map((skill, index) => (
          <Grid item  key={index} md={2} >
            <SkillLogoLink title={skill.title} url={skill.url} src={theme.palette.mode === 'light' ? skill.light : skill.dark} style={skill.style}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;