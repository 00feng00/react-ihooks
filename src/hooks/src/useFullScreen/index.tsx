import { useState } from 'react';
import screenfull from 'screenfull';
import useLatest from '../useLatest';
import useComponentDestroy from '../useComponentDestroy';
import type { BasicTarget } from '../utils/domTarget';
import { getTargetElement } from '../utils/domTarget';
import useMemoizedFn from '../useMemoizedFn';

export interface Options {
  onExit?: () => void;
  onEnter?: () => void;
}

const useFullScreen = (target: BasicTarget, options: Options) => {
  const { onExit, onEnter } = options || {};

  const onExitRef = useLatest(onExit);
  const onEnterRef = useLatest(onEnter);

  const [state, setState] = useState(false);

  const onChange = () => {
    if (screenfull.isEnabled) {
      const { isFullscreen } = screenfull;
      if (isFullscreen) {
        onEnterRef.current?.();
      } else {
        screenfull.off('change', onChange);
        onExitRef.current?.();
      }
      setState(isFullscreen);
    }
  };

  const enterFullscreen = () => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }

    if (screenfull.isEnabled) {
      try {
        screenfull.request(el);
        screenfull.on('change', onChange);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const exitFullscreen = () => {
    if (!state) {
      return;
    }
    if (screenfull.isEnabled) {
      screenfull.exit();
    }
  };

  const toggleFullscreen = () => {
    if (state) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  useComponentDestroy(() => {
    if (screenfull.isEnabled) {
      screenfull.off('change', onChange);
    }
  });

  return [
    state,
    {
      enterFullscreen: useMemoizedFn(enterFullscreen),
      exitFullscreen: useMemoizedFn(exitFullscreen),
      toggleFullscreen: useMemoizedFn(toggleFullscreen),
      isEnabled: screenfull.isEnabled,
    },
  ] as const;
};

export default useFullScreen;
