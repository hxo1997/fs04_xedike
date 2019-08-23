const validator = require("validator");

module.exports.validateDriverProfile = (req, res, next) => {
    let errors = {};
    const {address, passportId, job} = req.body;

    if(validator.isEmpty(address)){
        errors.address = "Address required";
    }
    else if(!validator.isLength(address, {min: 6, max: 50})){
        errors.address = "Address must be 6 - 50 characters";
    }

    if(validator.isEmpty(passportId)){
        errors.passportId = "Passport id required";
    }
    else if(!validator.isLength(passportId, {min: 6, max: 30})){
        errors.passportId = "Passport id must be 6 - 30 characters";
    }

    if(validator.isEmpty(job)){
        errors.job = "Job required";
    }

    if(Object.keys(errors).length){
        return res.status(400).json(errors);
    }
    next();
}

module.exports.validateDriverCar = (req, res, next) => {
    let errors = {};
    const {brand, model, manufacturingYear, licensePlate, numberOfSeats} = req.body;
    const carImage = req.file;
    const regexPath = /(png|svg|jpg|jpeg)$/i;

    if(validator.isEmpty(brand)){
        errors.brand = "Car's brand required";
    }
    else if(!validator.isLength(brand, {min: 6, max: 30})){
        errors.brand = "Car's brand must be 6 - 30 characters";
    }

    if(validator.isEmpty(model)){
        errors.model = "Car's model required";
    }
    else if(!validator.isLength(model, {min: 6, max: 30})){
        errors.brand = "Car's model must be 6 - 30 characters";
    }

    if(validator.isEmpty(manufacturingYear)){
        errors.manufacturingYear = "manufacuring year requried";
    }
    else if(!validator.isNumeric){
        errors.manufacturingYear = "Manufacuring year must be number";
    }

    if(validator.isEmpty(licensePlate)){
        errors.licensePlate = "License plate required";
    }
    else if(!validator.isLength(licensePlate, {min: 6, max: 30})){
        errors.licensePlate = "License plate must be 6 - 30 characters";
    }

    if(validator.isEmpty(numberOfSeats)){
        errors.numberOfSeats = "Number of seat required";
    }
    else if(!validator.isNumeric(numberOfSeats)){
        errors.numberOfSeats = "Number of seat must be number";
    }
    else if((parseInt(numberOfSeats) < 2) || (parseInt(numberOfSeats) > 10)){
        errors.numberOfSeats = "Min is 2 seats and max is 10";
    }

    if(!carImage){
        errors.carImage = "Car's image required";
    }
    else if(!regexPath.test(carImage.path)){
        errors.carImage = "Must be image file";
    }
    

    if(Object.keys(errors).length){
        return res.status(400).json(errors);
    }
    next();
}
module.exports.validateCreateTrip = (req, res, next) => {
    let errors = {};
    const {locationFrom, locationTo, availableSeats, fee} = req.body;

    if(validator.isEmpty(locationFrom)){
        errors.locationFrom = "Location from required";
    }
    
    if(validator.isEmpty(locationTo)){
        errors.locationTo = "Location to required";
    }


    if(validator.isEmpty(availableSeats)){
        errors.availableSeats = "available seats required";
    }
    else if(!validator.isNumeric(availableSeats)){
        errors.availableSeats = "Must be number";
    }
    else if(parseInt(availableSeats) < 1 || parseInt(availableSeats) > 10){
        errors.availableSeats = "Booking seats min is 1 and max is 10";
    }

    if(validator.isEmpty(fee)){
        errors.fee = "Fee required";
    }
    else if(!validator.isNumeric(fee)){
        errors.fee = "Must be number";
    }

    if(Object.keys(errors).length){
        return res.status(400).json(errors);
    }
    next();
}
module.exports.validateRegister = (req, res, next) =>{
    let errors = {};
    const {email, password, password2, fullName, userType, phone, dateOfBirth} = req.body;

    // check email
    if(validator.isEmpty(email)){
        errors.email = "Email required";
    }
    else if(!validator.isEmail(email)){
        errors.email = "Wrong email";
    }

    // check password
    if(validator.isEmpty(password)){
        errors.password = "Pasword required";        
    }
    else if(!validator.isLength(password, {min: 6, max: 30})){
        errors.password = "Password must be 6 - 30 characters";
    }
    
    if(validator.isEmpty(password2)){
        errors.password2 = "Confirm pasword required";        
    }
    else if(!validator.equals(password, password2)){
        errors.password2 = "Confirm password not match";
    }

    // check date of birth
    if(validator.isEmpty(dateOfBirth)){
        errors.dateOfBirth = "date of birth is reuqired";        
    }
    

    // check fullName
    if(validator.isEmpty(fullName)){
        errors.fullName = "full name required";        
    }
    else if(!validator.isLength(fullName, {min: 5, max: 30})){
        errors.fullName = "Full name must be 5 - 30 characters";
    }
    

    // check userType
    if( !validator.equals(userType, "driver") &&
        !validator.equals(userType, "passenger")
     ){
         errors.userType = "Choose driver or passenger";
     }

    // check phone
    if(validator.isEmpty(phone)){
        errors.phone = "Phone number required";
    }
    else if(!validator.isLength(phone, {min: 10, max: 11})){
        errors.phone = "Phone number must be 10 - 11 characters";
    }

    



    // send errors if not valite
    if(Object.keys(errors).length){
        return res.status(400).json(errors);
    }
    next();
}


module.exports.validateLogin = (req, res, next) => {
    let errors = {};
    const {email, password} = req.body;
    // check email
    if(validator.isEmpty(email)){
        errors.email = "Email required";
    }
    else if(!validator.isEmail(email)){
        errors.email = "Wrong email";
    }

    // check password
    if(validator.isEmpty(password)){
        errors.password = "Pasword required";        
    }
    else if(!validator.isLength(password, {min: 6, max: 30})){
        errors.password = "Password must be 6 - 30 characters";
    }

    
    // send errors if not valite
    if(Object.keys(errors).length){
        return res.status(400).json(errors);
    }
    next();
}

