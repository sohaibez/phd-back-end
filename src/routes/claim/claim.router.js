import express from "express";

import {
    httpsGetAllClaims,
    httpsGetClaimsByState,
    httpsAddClaim,
    httpsUpdateClaim
} from "./claim.controller.js";

const claimsRouter = express.Router();

claimsRouter.get("/", httpsGetAllClaims);
claimsRouter.get("/:state", httpsGetClaimsByState);
claimsRouter.post("/", httpsAddClaim);
claimsRouter.put("/:id", httpsUpdateClaim);

export default claimsRouter;