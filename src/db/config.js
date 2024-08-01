const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sultanwscube:WkNaz41L6gxs0UXB@sultan.f3yzdsd.mongodb.net/temp_suresh?retryWrites=true&w=majority&appName=sultan')
.then(()=>{
    console.log('database connected');
})
.catch((error)=>{
    console.log(error);
});