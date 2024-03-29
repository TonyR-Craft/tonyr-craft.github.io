import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import ContactLink from "./ContactLink";
import { const_contacts } from "../../constants/contacts";
const ContactDetails = () => {
  const theme = useTheme();

  return (
    <Box id="ContactDetails" sx={{ py: 4 }}>
      <Typography
        component="h5"
        variant="h5"
        align="center"
        color="text.secondary"
      >
        Contact details
      </Typography>
      <Grid
        container
        direction={"row"}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 0.5 }}
      >
        {const_contacts.map((contact, index) => (
          <Grid item key={index}>
            <ContactLink
              title={contact.title}
              url={contact.url}
              logo={
                contact.logo ?
                theme.palette.mode === "light"
                  ? { src: contact.logo?.light, style: contact.logo?.style }
                  : { src: contact.logo?.dark, style: contact.logo?.style }
                  : undefined
              }
              icon={
                contact.icon ? 
                theme.palette.mode === "light"
                  ? contact.icon?.light
                  : contact.icon?.dark
                  : undefined
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactDetails;
