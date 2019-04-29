import { BaseModel, Parse } from './base';
import { User } from './user';
import { RolePrivilegeEnum, RoleRestrictionEnum } from './transient';

export class Role extends BaseModel {
    public static PARSE_CLASSNAME = '_Role';

    private _name: string;
    private _startUrl: string;
    private _roles: Parse.Relation<Role>;
    private _users: Array<User>;
    private _privileges: Array<RolePrivilegeEnum>;
    private _restrictions: Array<RoleRestrictionEnum>;

    constructor() {
        super(Role.PARSE_CLASSNAME);
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get startUrl(): string {
        return this._startUrl;
    }

    public set startUrl(value: string) {
        this._startUrl = value;
    }

    public get roles(): Parse.Relation<Role> {
        return this._roles;
    }

    public set roles(value: Parse.Relation<Role>) {
        this._roles = value;
    }

    public get users(): Array<User> {
        return this._users;
    }

    public set users(value: Array<User>) {
        this._users = value;
    }

    public get privileges(): Array<RolePrivilegeEnum> {
        return this._privileges;
    }

    public set privileges(value: Array<RolePrivilegeEnum>) {
        this._privileges = value;
    }

    public get restrictions(): Array<RoleRestrictionEnum> {
        return this._restrictions;
    }

    public set restrictions(value: Array<RoleRestrictionEnum>) {
        this._restrictions = value;
    }
}

BaseModel.registerClass(Role, Role.PARSE_CLASSNAME);
