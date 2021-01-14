const sameObject = <T>(o1: T, o2: T): boolean => JSON.stringify(o1) === JSON.stringify(o2);

export default sameObject;
