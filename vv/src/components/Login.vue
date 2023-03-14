    <template>
        <body>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 image1"></div>
                    <div class="col-md-6 right">
                        <div class="inputText">
                            <header class="text-black pb-5 fw-bold">Login</header>
                            <div class="">
                                <input type="text" class="input" id="email" placeholder="Email" required>
                            </div>
                            <div class="">
                                <input type="password" class="input" id="password" placeholder="Password" required>
                            </div>
                            <div>
                                <input type="submit" class="button" value="Submit">
                            </div>
                            <div class="login fw-bold text-black">
                                <span>Don't have an account? <a href="#"><router-link to="/registration">Register Here</router-link> </a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </template>
        <script>
        export default {
            
        }
        </script>
        <style scoped>
        
        body{
            background: radial-gradient(circle, rgba(248,248,248,1) 0%,  rgb(193, 210, 232)100%);
            font-family: 'Black Mango Medium';
            margin: auto;
            min-height: 100vh;
        }
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .row{
            width: 900px;
            height: 540px;
            border-radius: 10px;
            background: #fff;
            box-shadow: 5px 5px 10px 1px rgba(0,0,0,0.2);
            margin-top: 50px;
        }
        .image1{
            background-image: url("https://i.postimg.cc/ZqZMLvSt/pexels-pnw-production-7625031.jpg");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            border-radius: 10px 0 0 10px;
        }
        .text{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .text p{
            color: #fff;
            font-size: 18px;
        }
        i{
            font-weight: 400;
            font-size: 15px;
        }
        .right{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        
        .input{
            height: 45px;
            width: 100%;
            background: transparent;
            border: none;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            outline: none;
            margin-bottom: 20px;
            color: #40414a;
        }
        
        .button{
            border: none;
            outline: none;
            height: 45px;
            background: #ececec;
            border-radius: 5px;
            transition: .4s;
            padding-right: 150px;
            padding-left: 150px;
        }
        .button:hover{
            background: rgba(37, 95, 156,0.9);
            color: #fff;
        }
        .login{
            text-align: center;
            font-size: small;
            margin-top: 25px;
        }
        span a{
            text-decoration: none;
            font-weight: 700;
            color: #000;
            transition: .5s;
        }
        span a:hover{
            text-decoration: underline;
            color: #000;
        }
        @media only screen and (max-width: 768px){
            .image1{
                border-radius: 10px 10px 0 0;
            }
            .text{
                position: absolute;
                top: 70%;
                text-align: center;
            }
            .text p,i{
                font-size: 17px;
            }
            .row{
                max-width: 420px;
                width: 100%;
            }
        } 
            
        </style>
        
        <!-- https://www.divinectorweb.com/2023/02/login-and-signup-form-switch-javascript.html -->