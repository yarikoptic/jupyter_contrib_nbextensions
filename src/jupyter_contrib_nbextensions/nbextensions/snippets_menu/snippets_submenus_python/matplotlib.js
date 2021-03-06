define({
    'name' : 'Matplotlib',
    'sub-menu' : [
        {
            'name' : 'Setup for notebook',
            'snippet'  : [
                'from __future__ import print_function, division',
                'import numpy as np',
                'import matplotlib as mpl',
                'import matplotlib.pyplot as plt',
                '%matplotlib inline',
            ],
        },
        {
            'name' : 'Setup for scripts',
            'snippet'  : [
                'import matplotlib as mpl',
                'mpl.use("Agg")  # Must come after importing mpl, but before importing plt',
                'import matplotlib.pyplot as plt',
            ],
        },
        {
            'name' : 'Documentation',
            'external-link' : 'http://matplotlib.org/contents.html',
        },
        '---',
        {
            'name' : 'Example plots',
            'sub-menu' : [
                {
                    'name' : 'Basic line plot',
                    'snippet'  : [
                        '# Silly example data',
                        'bp_x = np.linspace(0, 2*np.pi, num=40, endpoint=True)',
                        'bp_y = np.sin(bp_x)',
                        '',
                        '# Make the plot',
                        'plt.plot(bp_x, bp_y, linewidth=3, linestyle="--",',
                        '         color="blue", label=r"Legend label $\\sin(x)$")',
                        'plt.xlabel(r"Description of $x$ coordinate (units)")',
                        'plt.ylabel(r"Description of $y$ coordinate (units)")',
                        'plt.title(r"Title here (remove for papers)")',
                        'plt.xlim(0, 2*np.pi)',
                        'plt.ylim(-1.1, 1.1)',
                        'plt.legend(loc="lower left")',
                        'plt.show()',
                    ],
                },

                {
                    'name' : 'Histogram',
                    'snippet'  : [
                        'x = np.random.randn(10000)  # example data, random normal distribution',
                        'num_bins = 50',
                        'n, bins, patches = plt.hist(x, num_bins, normed=1, facecolor="green", alpha=0.5)',
                        'plt.xlabel(r"Description of $x$ coordinate (units)")',
                        'plt.ylabel(r"Description of $y$ coordinate (units)")',
                        'plt.title(r"Histogram title here (remove for papers)")',
                        'plt.show();',
                    ],
                },

                {
                    'name' : 'Contour plot',
                    'snippet'  : [
                        '# Silly example data',
                        'x_min, x_max, y_min, y_max = 0.0, 2*np.pi, 0.0, 2*np.pi',
                        'f = [[np.sin(x**2 + y**2) for x in np.linspace(x_min, x_max, num=200)]',
                        '     for y in np.linspace(y_min, y_max, num=200)]',
                        '',
                        '# Make the plot',
                        'plt.figure()',
                        'plt.imshow(f, interpolation="bicubic", origin="lower",',
                        '           extent=[x_min, x_max, y_min, y_max])',
                        'plt.colorbar()',
                        'plt.title(r"Title here (remove for papers)")',
                        'plt.xlabel(r"Description of $x$ coordinate (units)")',
                        'plt.ylabel(r"Description of $y$ coordinate (units)")',
                        'plt.show()',
                    ],
                },

                {
                    'name' : '3-d plot',
                    'snippet'  : [
                        'from mpl_toolkits.mplot3d import Axes3D',
                        'from matplotlib import cm',
                        '',
                        '# Silly example data',
                        'X = np.arange(-5, 5, 0.25)',
                        'Y = np.arange(-5, 5, 0.25)',
                        'X, Y = np.meshgrid(X, Y)',
                        'R = np.sqrt(X**2 + Y**2)',
                        'Z = np.sin(R)',
                        '',
                        '# Make the plot',
                        'fig = plt.figure()',
                        'ax = fig.gca(projection="3d")',
                        'surf = ax.plot_surface(X, Y, Z, rstride=1, cstride=1, cmap=cm.coolwarm,',
                        '                       linewidth=0, antialiased=False)',
                        'ax.set_zlim(-1.01, 1.01)',
                        'fig.colorbar(surf, shrink=0.5, aspect=5)',
                        'plt.show()',
                    ],
                },

                {
                    'name' : 'Error bars',
                    'snippet'  : [
                        '# Silly example data',
                        'x = np.linspace(0.1, 4, num=10)',
                        'y = np.exp(-x)',
                        'dx = 0.1 - x/25.0',
                        'dy = 0.2 + x/15.0',
                        '',
                        '# Make the plot',
                        'plt.figure()',
                        'plt.errorbar(x, y, xerr=dx, yerr=dy)',
                        'plt.title(r"Title here (remove for papers)")',
                        'plt.xlabel(r"Description of $x$ coordinate (units)")',
                        'plt.ylabel(r"Description of $y$ coordinate (units)")',
                        'plt.show()',
                    ],
                },

                {
                    'name' : 'Grouped plots',
                    'snippet'  : [
                        '# Silly example data',
                        'bp_x1 = np.linspace(0, 2*np.pi, num=40, endpoint=True)',
                        'bp_y1 = np.sin(bp_x1)',
                        'bp_x2 = np.linspace(0, np.pi, num=40, endpoint=True)',
                        'bp_y2 = np.cos(bp_x2)',
                        '',
                        '# Make the plot',
                        'fig, (ax1, ax2) = plt.subplots(ncols=2)',
                        'ax1.plot(bp_x1, bp_y1, linewidth=3, linestyle="--",',
                        '         color="blue", label=r"Legend label $\\sin(x)$")',
                        'ax1.set_xlabel(r"Description of $x_{1}$ coordinate (units)")',
                        'ax1.set_ylabel(r"Description of $y_{1}$ coordinate (units)")',
                        'ax1.set_title(r"Title 1 here (remove for papers)")',
                        'ax1.set_xlim(0, 2*np.pi)',
                        'ax1.set_ylim(-1.1, 1.1)',
                        'ax1.legend(loc="lower left")',
                        'ax2.plot(bp_x2, bp_y2, linewidth=3, linestyle="--",',
                        '         color="blue", label=r"Legend label $\\cos(x)$")',
                        'ax2.set_xlabel(r"Description of $x_{2}$ coordinate (units)")',
                        'ax2.set_ylabel(r"Description of $y_{2}$ coordinate (units)")',
                        'ax2.set_title(r"Title 2 here (remove for papers)")',
                        'ax2.set_xlim(0, np.pi)',
                        'ax2.set_ylim(-1.1, 1.1)',
                        'ax2.legend(loc="lower left")',
                        'plt.show()',
                    ],
                },
            ],
        },
        {
            'name' : 'Save the current figure',
            'snippet' : ['plt.savefig("figure_file_name.pdf")'],
            'sub-menu' : [
                {
                    'name' : 'Save as PDF',
                    'snippet' : ['plt.savefig("figure_file_name.pdf")'],
                },
                {
                    'name' : 'Save as PNG',
                    'snippet' : ['plt.savefig("figure_file_name.png", transparent=True, dpi=300)'],
                },
                {
                    'name' : 'Save as SVG',
                    'snippet' : ['plt.savefig("figure_file_name.svg")'],
                },
                {
                    'name' : 'Save as EPS',
                    'snippet' : ['plt.savefig("figure_file_name.eps")'],
                },
                {
                    'name' : 'Save as PS',
                    'snippet' : ['plt.savefig("figure_file_name.ps")'],
                },

            ],
        },
    ],
});
