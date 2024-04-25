type MaybeString = String | null | undefined;

const A: NonNullable<MaybeString> = 'A';

//const B: NonNullable<MaybeString> = null; erro

//const C: NonNullable<MaybeString> = undefined;