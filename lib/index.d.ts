declare module '@procivis/base45' {

    function encode(input: Uint8Array): string;

    function decode(input: string): Uint8Array;
}