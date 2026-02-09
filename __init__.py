from __future__ import annotations

___version___ = "25.3"


def main(args: list[str] | None = None) -> int:
    """This is an internal API only meant for use by pip's own console scripts.

    For additional details, see https://github.com/pypa/pip/issues/7498.
    """
    from pip._internal.utils.entrypoints import _wrapper

    return _wrapper(args)
