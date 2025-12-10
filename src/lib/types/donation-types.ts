export interface Session {
	name: string;
	token: string;
	_id: string;
}

export interface User {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	_id?: string;
}
