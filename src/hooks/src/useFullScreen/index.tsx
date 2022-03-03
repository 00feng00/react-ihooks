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
  const { onEnter, onExit } = options || {};

  const onEnterRef = useLatest(onEnter);
  const onExitRef = useLatest(onExit);

  const [state, setState] = useState<boolean>(false);

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

  const enterFullScreen = () => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }

    if (screenfull.isEnabled) {
      try {
        screenfull.request(el);
        screenfull.on('change', onChange);
      } catch (error) {
        console.log('error');
      }
    }
  };

  const exitFullScreen = () => {
    if (!state) {
      return;
    }
    if (screenfull.isEnabled) {
      screenfull.exit();
    }
  };

  const toggleFullScreen = () => {
    if (state) {
      exitFullScreen();
    } else {
      enterFullScreen();
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
      enterFullScreen: useMemoizedFn(enterFullScreen),
      exitFullScreen: useMemoizedFn(exitFullScreen),
      toggleFullScreen: useMemoizedFn(toggleFullScreen),
      isEnabled: screenfull.isEnabled,
    },
  ] as const;
};

export default useFullScreen;
