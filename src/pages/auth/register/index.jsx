import * as React from "react";
import { useDispatch } from "react-redux";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Avatar, Button, Container, Box, Typography } from "@mui/material";
import { ActionRegister } from "../../../apis/actions/auth";
import { useNavigate } from "react-router-dom";
const PageRegister = () => {
  const history = useNavigate();

  const dispatch = useDispatch();
  const [auth, setAuth] = React.useState({
    email: "paullong0505@gmail.com",
    password: "1111",
    confirm: "1111",
  });
  const onChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== auth.password) {
        return false;
      }
      return true;
    });

    ValidatorForm.addValidationRule("isLengthMatch", (value) => {
      if (value.length < 6 || value.length > 30) {
        return false;
      }
      return true;
    });
    // eslint-disable-next-line
  }, [auth.password, auth.confirm]);

  // React.useEffect(() => {
  //   // remove rule when it is not needed
  //   ValidatorForm.removeValidationRule("isPasswordMatch");
  //   ValidatorForm.removeValidationRule("isLengthMatch");
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "primary.main",
          }}
        />
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <ValidatorForm
          onSubmit={(e) => {
            // const authInfo = new FormData();
            // for (const key in auth) {
            //   authInfo.append({ key: auth[key] });
            // }
            const authInfo = { email: auth.email, password: auth.password };
            dispatch(ActionRegister(authInfo));
          }}
          onError={(errors) => console.log(errors)}
          style={{ width: "80%" }}
          //   onCancel={(e) => {
          //     history.push("/");
          //   }}
        >
          <TextValidator
            margin="normal"
            fullWidth
            label="email"
            onChange={onChange}
            placeholder="apullong0505@gmail.com"
            name="email"
            value={auth.email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <TextValidator
            margin="normal"
            fullWidth
            label="Password"
            onChange={onChange}
            name="password"
            type="password"
            validators={["required", "isLengthMatch"]}
            errorMessages={[
              "this field is required",
              "length must be 6~30 chacraters",
            ]}
            value={auth.password}
          />
          <TextValidator
            margin="normal"
            fullWidth
            label="Confirm password"
            onChange={onChange}
            name="confirm"
            type="password"
            validators={["required", "isPasswordMatch"]}
            errorMessages={["this field is required", "password mismatch"]}
            value={auth.confirm}
          />
          <Box display={"flex"} justifyContent={"center"}>
            <Button type="submit" variant="contained" sx={{ m: 2 }}>
              Submit
            </Button>
            <Button
              variant="contained"
              sx={{ m: 2 }}
              onClick={(e) => {
                history("/login");
              }}
            >
              Cancel
            </Button>
          </Box>
        </ValidatorForm>
      </Box>
    </Container>
  );
};
export default PageRegister;
