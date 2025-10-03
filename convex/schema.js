import { defineSchema, defineTable } from "convex/server";
import {v} from 'convex/values';


export default defineSchema({
   
   //Table : users,
    users:  defineTable({
        name: v.string(),
        email:v.string(),
        tokenIdentifier:v.string(),
        imageUrl:v.optional(v.string()),

}).index("by_token", ["tokenIdentifier"]),
});