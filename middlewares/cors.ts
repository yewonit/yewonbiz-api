import { oakCors } from "oakCors";

const cors = oakCors({
  origin: [
    "http://localhost:8080",
    "http://localhost:8081",
    "http://localhost:8082",
    "http://192.168.200.29:8080",
    "https://yewon-biz-9dbe9.web.app",
    "https://yewonbiz-admin.web.app",
    "https://yewonbiz.com", // 테스트용
    "https://yewon-biz-staging.web.app",
    "https://yewonbiz-demo.web.app",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  optionsSuccessStatus: 200,
  // credentials: true,
})

export default cors
