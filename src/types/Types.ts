export interface PositinState {
    x: number,
    y: number
}

export interface MouseTrackIF extends PositinState {
    isImageShow: boolean
}

export interface Component {
    mouse: PositinState,
    touch: handleClickFunction
}

interface handleClickFunction {
    (): void
}