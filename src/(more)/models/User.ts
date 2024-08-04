import mongoose, { Schema, Document } from "mongoose";
export interface User extends Document {
    username: string,
    email: string,
    mark: Mark[],
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    LifeTimeHasAccessGold: boolean,
    LifeTimeHasAccessBasic: boolean,
    createdAt: Date,
}

export interface Site extends Document {
    title: string,
    home: string,
    page: string,
    icon:string,
    rank: number
}

const SiteSchema: Schema<Site> = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    home: {
        type: String,
        required: [true, 'Home is required']
    },
    page: {
        type: String,
    },
    icon: {
        type: String,
    },
    rank: {
        type: Number,
        required: [true, 'rank is required']
    },
}, { timestamps: true })

export interface Mark extends Document {
    title: string,
    site:Site[],
    rank: number
}

const MarkSchema: Schema<Mark> = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    site: [SiteSchema],
    rank: {
        type: Number,
        required: [true, 'rank is required']
    },
}, { timestamps: true })

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        trim: true,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "please use a valid email"]
    },
    mark: [MarkSchema],
    password: {
        type: String,
        required: [true, "password is required"]
    },
    verifyCode: {
        type: String,
        required: [true, 'Verify Code is required']
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'verify Code Expiry is required']
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    LifeTimeHasAccessGold: {
        type: Boolean,
        default: false,
    },
    LifeTimeHasAccessBasic: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)
export default UserModel